import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { getBrand, getFloors, getMenu, getFromCache } from "../data/dataSource.js";
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
    return getFromCache(`${STORAGE_KEYS.MENU_PREFIX}${initialFloor}`) || [];
  });
  const [loading, setLoading] = useState(rawMenu.length === 0);
  const [error, setError] = useState(null);

  // Type filter: ground floor is strictly "veg"; top floor can be "veg" | "nonveg" | "bar"
  const [selectedType, setSelectedTypeState] = useState(() => {
    if (initialFloor === "ground") return "veg";
    return safeGetStorage(STORAGE_KEYS.TYPE_PREFIX + "top", "nonveg");
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
    if (newFloor === "ground") {
      setSelectedTypeState("veg");
    } else {
      const savedType = safeGetStorage(STORAGE_KEYS.TYPE_PREFIX + "top", "nonveg");
      setSelectedTypeState(savedType);
    }
    setSelectedCategory("all");
    setSelectedDishIndex(0);

    // Instant load from cache if available
    const cached = getFromCache(`${STORAGE_KEYS.MENU_PREFIX}${newFloor}`);
    if (cached) {
      setRawMenu(cached);
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, []);

  const setSelectedType = useCallback((type) => {
    if (floorId === "ground") {
      setSelectedTypeState("veg");
      return;
    }
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
      setRawMenu(menuRes);
      setError(null);
    } catch (err) {
      console.error(`[MenuContext] Error fetching menu for ${targetFloor}:`, err);
      const cached = getFromCache(`${STORAGE_KEYS.MENU_PREFIX}${targetFloor}`);
      if (!cached || cached.length === 0) {
        setError("Menu is loading, please refresh");
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

    const items = [];
    for (const cat of rawMenu) {
      if (!cat.items || !Array.isArray(cat.items)) continue;
      for (const item of cat.items) {
        // Must pass floor safety filter
        if (!isItemVisibleOnFloor(item, activeFloorConfig)) continue;

        // On top floor, match selected dietary type
        if (floorId === "top") {
          if (item.type !== selectedType) continue;
        }

        items.push({
          ...item,
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
