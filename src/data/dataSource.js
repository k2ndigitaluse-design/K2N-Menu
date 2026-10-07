/**
 * dataSource.js
 * The single unified data access layer for K2N Digital Menu.
 *
 * All application components consume data exclusively through these async methods:
 * - getBrand()
 * - getFloors()
 * - getMenu()
 *
 * In production Stage 2, these functions can be swapped with Firebase Firestore
 * queries without requiring modifications to any component or view.
 */

import brandData from "../config/brand.js";
import floorsData from "../config/floors.js";
import sampleMenuData from "./sample-menu.js";

const CACHE_KEYS = {
  BRAND: "k2n_brand_cache",
  FLOORS: "k2n_floors_cache",
  MENU: "k2n_menu_cache"
};

/**
 * Safely read cached data from localStorage
 */
function getFromCache(key) {
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
function saveToCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn(`[dataSource] Cache write failed for ${key}:`, err);
  }
}

/**
 * Fetch Brand Settings
 * @returns {Promise<Object>} Brand settings object
 */
export async function getBrand() {
  try {
    // Simulated async fetch (local or Firestore)
    const data = { ...brandData };
    saveToCache(CACHE_KEYS.BRAND, data);
    return data;
  } catch (err) {
    console.error("[dataSource] Error loading brand:", err);
    const cached = getFromCache(CACHE_KEYS.BRAND);
    if (cached) return cached;
    return brandData;
  }
}

/**
 * Fetch Floor Configurations
 * @returns {Promise<Object>} Floors configuration
 */
export async function getFloors() {
  try {
    const data = { ...floorsData };
    saveToCache(CACHE_KEYS.FLOORS, data);
    return data;
  } catch (err) {
    console.error("[dataSource] Error loading floors:", err);
    const cached = getFromCache(CACHE_KEYS.FLOORS);
    if (cached) return cached;
    return floorsData;
  }
}

/**
 * Fetch Categorized Menu Data
 * @returns {Promise<Array>} List of categories with items
 */
export async function getMenu() {
  try {
    // In future stage: const snapshot = await getDocs(collection(db, "menu"));
    const data = [...sampleMenuData];
    saveToCache(CACHE_KEYS.MENU, data);
    return data;
  } catch (err) {
    console.error("[dataSource] Error loading menu:", err);
    const cached = getFromCache(CACHE_KEYS.MENU);
    if (cached && Array.isArray(cached) && cached.length > 0) {
      return cached;
    }
    // Fallback to imported bundle data
    return sampleMenuData;
  }
}

export default {
  getBrand,
  getFloors,
  getMenu
};
