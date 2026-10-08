import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { getBrand, getFloors, getMenu, getFromCache } from "../data/dataSource.js";
import { sampleMenus } from "../data/sample-menu.js";
import { isItemVisibleOnFloor } from "../data/visibleItems.js";

const MenuContext = createContext(null);

const STORAGE_KEYS = {
  TYPE_PREFIX: "k2n_type_",
  VIEW_MODE: "k2n_view_mode",
  MENU_PREFIX: "k2n_menu_"
};

function safeGetStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {}
}

export function MenuProvider({ children, initialFloor = "ground" }) {
  const [floorId, setFloorId] = useState(initialFloor);
  const [brand, setBrand] = useState(null);
  const [floorsConfig, setFloorsConfig] = useState(null);

  // Raw menu categories for current floor
  const [rawMenu, setRawMenu] = useState(() => {
    const cached = getFromCache(`${STORAGE_KEYS.MENU_PREFIX}${initialFloor}`);
    const count = Array.isArray(cached) ? cached.reduce((sum, c) => sum + (c.items?.length || 0), 0) : 0;
    if (count > 0) return cached;
    return sampleMenus[initialFloor] || [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Type filter: both floors can be "veg" | "nonveg" | "bar"
  const [selectedType, setSelectedTypeState] = useState(() => {
    return safeGetStorage(STORAGE_KEYS.TYPE_PREFIX + initialFloor, "veg");
  });

  // Selected Category ("all" or category id)
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Selected View ("individual" | "grid" | "list")
  const [viewMode, setViewModeState] = useState(() => {
    return safeGetStorage(STORAGE_KEYS.VIEW_MODE, "individual");
  });

  // Active dish index in current filtered list
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);

  // Set floor and enforce floor constraints
  const setFloor = useCallback((newFloor) => {
    setFloorId(newFloor);
    const savedType = safeGetStorage(STORAGE_KEYS.TYPE_PREFIX + newFloor, "veg");
    setSelectedTypeState(savedType);
    setSelectedCategory("all");
    setSelectedDishIndex(0);

    // Instant load from cache if available and has items
    const cached = getFromCache(`${STORAGE_KEYS.MENU_PREFIX}${newFloor}`);
    const count = Array.isArray(cached) ? cached.reduce((sum, c) => sum + (c.items?.length || 0), 0) : 0;
    if (count > 0) {
      setRawMenu(cached);
    } else {
      setRawMenu(sampleMenus[newFloor] || []);
    }
  }, []);

  const setSelectedType = useCallback((type) => {
    setSelectedTypeState(type);
    safeSetStorage(STORAGE_KEYS.TYPE_PREFIX + floorId, type);
    setSelectedCategory("all");
    setSelectedDishIndex(0);
  }, [floorId]);

  const setViewMode = useCallback((mode) => {
    setViewModeState(mode);
    safeSetStorage(STORAGE_KEYS.VIEW_MODE, mode);
  }, []);

  // Fetch Menu for current floor (with background refresh)
  const fetchMenuData = useCallback(async (targetFloor) => {
    try {
      const [brandRes, floorsRes, menuRes] = await Promise.all([
        getBrand(),
        getFloors(),
        getMenu(targetFloor)
      ]);
      setBrand(brandRes);
      setFloorsConfig(floorsRes);
      if (Array.isArray(menuRes) && menuRes.length > 0) {
        setRawMenu(menuRes);
      } else {
        setRawMenu(sampleMenus[targetFloor] || []);
      }
      setError(null);
    } catch (err) {
      console.error(`[MenuContext] Error fetching menu for ${targetFloor}:`, err);
      const cached = getFromCache(`${STORAGE_KEYS.MENU_PREFIX}${targetFloor}`);
      if (!cached || cached.length === 0) {
        setRawMenu(sampleMenus[targetFloor] || []);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenuData(floorId);
  }, [floorId, fetchMenuData]);

  // Floor configuration object
  const activeFloorConfig = useMemo(() => {
    if (!floorsConfig) return null;
    return floorsConfig[floorId] || floorsConfig.ground;
  }, [floorsConfig, floorId]);

  // All visible items for current floor & current type filter
  const floorItems = useMemo(() => {
    if (!activeFloorConfig || !Array.isArray(rawMenu)) return [];

    // Fallback sample image map
    const sampleFloorList = sampleMenus[floorId] || [];
    const sampleImageMap = new Map();
    for (const cat of sampleFloorList) {
      if (Array.isArray(cat.items)) {
        for (const it of cat.items) {
          if (it.imageUrl) {
            sampleImageMap.set(it.id, it.imageUrl);
            sampleImageMap.set(it.name.toLowerCase().trim(), it.imageUrl);
          }
        }
      }
    }

    const items = [];
    for (const cat of rawMenu) {
      if (!cat.items || !Array.isArray(cat.items)) continue;
      for (const item of cat.items) {
        // Must pass floor safety filter
        if (!isItemVisibleOnFloor(item, activeFloorConfig)) continue;

        // Match selected dietary type (veg, nonveg, or bar)
        if (item.type !== selectedType) continue;

        const imageUrl = item.imageUrl || sampleImageMap.get(item.id) || sampleImageMap.get(item.name?.toLowerCase().trim()) || "";

        items.push({
          ...item,
          imageUrl,
          category: cat.id,
          categoryName: cat.name,
          effectivePrice: Number(item.price) || 0
        });
      }
    }
    return items;
  }, [rawMenu, activeFloorConfig, floorId, selectedType]);

  // Categories that have at least one visible item under current filters
  const visibleCategories = useMemo(() => {
    if (!rawMenu) return [];
    const validCategoryIds = new Set(floorItems.map((i) => i.category));

    const list = rawMenu
      .filter((cat) => validCategoryIds.has(cat.id))
      .map((cat) => ({
        id: cat.id,
        name: cat.name
      }));

    return [{ id: "all", name: "All" }, ...list];
  }, [rawMenu, floorItems]);

  // Reset selectedCategory to "all" if current category is no longer valid under new filter
  useEffect(() => {
    if (selectedCategory !== "all" && !visibleCategories.some((c) => c.id === selectedCategory)) {
      setSelectedCategory("all");
    }
  }, [visibleCategories, selectedCategory]);

  // Final items filtered by selected category
  const displayedItems = useMemo(() => {
    if (selectedCategory === "all") return floorItems;
    return floorItems.filter((i) => i.category === selectedCategory);
  }, [floorItems, selectedCategory]);

  // Keep selectedDishIndex in bounds
  useEffect(() => {
    if (selectedDishIndex >= displayedItems.length && displayedItems.length > 0) {
      setSelectedDishIndex(0);
    }
  }, [displayedItems.length, selectedDishIndex]);

  // Navigation helpers for sideways category switching
  const goToNextCategory = useCallback(() => {
    if (!visibleCategories || visibleCategories.length === 0) return;
    const currentIdx = visibleCategories.findIndex((c) => c.id === selectedCategory);
    if (currentIdx !== -1 && currentIdx < visibleCategories.length - 1) {
      setSelectedCategory(visibleCategories[currentIdx + 1].id);
      setSelectedDishIndex(0);
    }
  }, [visibleCategories, selectedCategory]);

  const goToPrevCategory = useCallback(() => {
    if (!visibleCategories || visibleCategories.length === 0) return;
    const currentIdx = visibleCategories.findIndex((c) => c.id === selectedCategory);
    if (currentIdx > 0) {
      setSelectedCategory(visibleCategories[currentIdx - 1].id);
      setSelectedDishIndex(0);
    }
  }, [visibleCategories, selectedCategory]);

  const value = {
    brand,
    floorsConfig,
    floorId,
    setFloor,
    activeFloorConfig,
    selectedType,
    setSelectedType,
    selectedCategory,
    setSelectedCategory,
    visibleCategories,
    goToNextCategory,
    goToPrevCategory,
    rawMenu,
    displayedItems,
    viewMode,
    setViewMode,
    selectedDishIndex,
    setSelectedDishIndex,
    loading,
    error,
    refreshMenu: () => fetchMenuData(floorId)
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return ctx;
}

export default MenuContext;
