/**
 * visibleItems.js
 * The single source of truth for menu item filtering.
 *
 * Rules:
 * - Keep an item ONLY if:
 *   1. item.floors includes the floor id (e.g. "ground" or "top")
 *   2. floor.allowedTypes includes item.type ("veg", "nonveg", "alcohol")
 *   3. item.available is true
 * - HARD SAFETY: Non-veg and alcohol items must NEVER reach the ground floor screens,
 *   even if data is corrupted or incorrectly configured.
 */

export function isItemVisibleOnFloor(item, floor) {
  if (!item || !item.available) return false;

  const floorId = typeof floor === "string" ? floor : floor?.id;
  const allowedTypes = Array.isArray(floor?.allowedTypes)
    ? floor.allowedTypes
    : floorId === "ground"
    ? ["veg"]
    : ["veg", "nonveg", "alcohol"];

  // Absolute hard safeguard for ground floor
  if (floorId === "ground" && item.type !== "veg") {
    return false;
  }

  // Check item floor inclusion
  const itemFloors = Array.isArray(item.floors) ? item.floors : [];
  if (!itemFloors.includes(floorId)) {
    return false;
  }

  // Check floor type permission
  if (!allowedTypes.includes(item.type)) {
    return false;
  }

  return true;
}

/**
 * Filter menu data for a specific floor.
 * Handles both flat array of items and category-grouped menu [{ id, name, items }].
 *
 * @param {Array} menu - Category list [{ id, name, items: [...] }] or flat array of items
 * @param {Object|string} floor - Floor object or floor ID string ("ground" | "top")
 * @returns {Array} Flat list of visible items for that floor
 */
export function visibleItems(menu, floor) {
  if (!Array.isArray(menu)) return [];

  const flatList = [];

  for (const entry of menu) {
    if (entry && Array.isArray(entry.items)) {
      // Category structure
      for (const item of entry.items) {
        if (isItemVisibleOnFloor(item, floor)) {
          flatList.push({
            ...item,
            category: item.category || entry.id,
            categoryName: entry.name
          });
        }
      }
    } else if (entry && entry.id) {
      // Direct item
      if (isItemVisibleOnFloor(entry, floor)) {
        flatList.push(entry);
      }
    }
  }

  return flatList;
}

/**
 * Filter menu categories keeping only categories that have visible items on the floor.
 */
export function visibleCategories(menu, floor) {
  if (!Array.isArray(menu)) return [];

  return menu
    .map((cat) => {
      const items = (cat.items || []).filter((item) => isItemVisibleOnFloor(item, floor));
      return {
        ...cat,
        items
      };
    })
    .filter((cat) => cat.items.length > 0);
}

export default visibleItems;
