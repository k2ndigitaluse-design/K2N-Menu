/**
 * dataSource.js
 * Unified data access layer with Firestore backend and localStorage caching.
 *
 * Path: menus/{floorId}/categories/{categoryId}
 */

import brandData from "../config/brand.js";
import floorsData from "../config/floors.js";
import { sampleMenus } from "./sample-menu.js";
import { db, isFirebaseConfigured } from "../lib/firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc
} from "firebase/firestore";

const CACHE_KEYS = {
  BRAND: "k2n_brand_cache",
  FLOORS: "k2n_floors_cache",
  MENU_PREFIX: "k2n_menu_"
};

/**
 * Safely read cached data from localStorage
 */
export function getFromCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.warn(`[dataSource] Cache read failed for ${key}:`, err);
    return null;
  }
}

/**
 * Safely persist data to localStorage
 */
export function saveToCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[dataSource] Cache write failed for ${key}:`, err);
  }
}

/**
 * Get Brand Information
 */
export async function getBrand() {
  return brandData;
}

/**
 * Get Floors Configuration
 */
export async function getFloors() {
  return floorsData;
}

/**
 * Fetch Floor Menu from Firestore (or local sample fallback if unconfigured)
 * Sorts categories in-memory by 'order'.
 *
 * @param {string} floorId - "ground" | "top"
 * @returns {Promise<Array>} List of categories
 */
export async function getMenu(floorId = "ground") {
  const cacheKey = `${CACHE_KEYS.MENU_PREFIX}${floorId}`;

  // If Firebase is not configured, return sample menu directly
  if (!isFirebaseConfigured || !db) {
    const localSample = sampleMenus[floorId] || [];
    saveToCache(cacheKey, localSample);
    return localSample;
  }

  try {
    const categoriesRef = collection(db, "menus", floorId, "categories");
    const snapshot = await getDocs(categoriesRef);

    if (snapshot.empty) {
      // Return empty array (will trigger "Menu coming soon" or allow import)
      saveToCache(cacheKey, []);
      return [];
    }

    const categories = [];
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      categories.push({
        id: docSnap.id,
        name: data.name || "Untitled Category",
        order: Number(data.order) || 0,
        items: Array.isArray(data.items) ? data.items : []
      });
    });

    // In-memory sort by 'order'
    categories.sort((a, b) => a.order - b.order);

    // Cache the result
    saveToCache(cacheKey, categories);
    return categories;
  } catch (err) {
    console.error(`[dataSource] Error fetching menu for floor ${floorId}:`, err);
    const cached = getFromCache(cacheKey);
    if (cached !== null) {
      return cached;
    }
    throw err;
  }
}

/**
 * Admin: Save or Update a Category Document
 *
 * @param {string} floorId - "ground" | "top"
 * @param {string} categoryId - Document ID
 * @param {Object} categoryData - { name, order, items }
 */
export async function saveCategory(floorId, categoryId, categoryData) {
  if (!db) {
    throw new Error("Firestore is not configured. Check your .env.local file.");
  }

  const categoryDocRef = doc(db, "menus", floorId, "categories", categoryId);
  const payload = {
    name: categoryData.name.trim(),
    order: Number(categoryData.order) || 1,
    items: categoryData.items.map((item, idx) => ({
      id: item.id || `item-${Date.now()}-${idx}`,
      name: item.name.trim(),
      description: (item.description || "").trim(),
      price: Number(item.price) || 0,
      type: floorId === "ground" ? "veg" : (item.type || "veg"),
      imageUrl: item.imageUrl || ""
    }))
  };

  await setDoc(categoryDocRef, payload);

  // Update local cache
  const cached = getFromCache(`${CACHE_KEYS.MENU_PREFIX}${floorId}`) || [];
  const existingIdx = cached.findIndex((c) => c.id === categoryId);
  if (existingIdx >= 0) {
    cached[existingIdx] = { id: categoryId, ...payload };
  } else {
    cached.push({ id: categoryId, ...payload });
  }
  cached.sort((a, b) => a.order - b.order);
  saveToCache(`${CACHE_KEYS.MENU_PREFIX}${floorId}`, cached);

  return { id: categoryId, ...payload };
}

/**
 * Admin: Delete a Category Document
 *
 * @param {string} floorId - "ground" | "top"
 * @param {string} categoryId - Document ID to delete
 */
export async function deleteCategory(floorId, categoryId) {
  if (!db) {
    throw new Error("Firestore is not configured. Check your .env.local file.");
  }

  const categoryDocRef = doc(db, "menus", floorId, "categories", categoryId);
  await deleteDoc(categoryDocRef);

  // Remove from cache
  const cached = getFromCache(`${CACHE_KEYS.MENU_PREFIX}${floorId}`) || [];
  const updated = cached.filter((c) => c.id !== categoryId);
  saveToCache(`${CACHE_KEYS.MENU_PREFIX}${floorId}`, updated);
}

/**
 * Admin Testing: Import Sample Menu into Firestore for a Floor
 */
export async function importSampleMenu(floorId) {
  if (!db) {
    throw new Error("Firestore is not configured. Check your .env.local file.");
  }

  const samples = sampleMenus[floorId] || [];
  for (const cat of samples) {
    const docRef = doc(db, "menus", floorId, "categories", cat.id);
    await setDoc(docRef, {
      name: cat.name,
      order: cat.order,
      items: cat.items
    });
  }

  saveToCache(`${CACHE_KEYS.MENU_PREFIX}${floorId}`, samples);
  return samples;
}

export default {
  getBrand,
  getFloors,
  getMenu,
  getFromCache,
  saveToCache,
  saveCategory,
  deleteCategory,
  importSampleMenu
};
