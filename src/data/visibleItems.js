/**
 * visibleItems.js
 * Safety filter engine for K2N Digital Menu.
 *
 * Rules:
 * - Keep an item ONLY if:
 *   1. The floor's allowedTypes includes item.type ("veg" | "nonveg" | "bar")
 * - HARD SAFETY: Non-veg and bar items must NEVER reach the Ground floor screens,
 *   even if malformed or misconfigured in Firestore data.
 */

export function isItemVisibleOnFloor(item, floor) {
  if (!item || !item.name) return false;

  const floorId = typeof floor === "string" ? floor : floor?.id;
  const allowedTypes = Array.isArray(floor?.allowedTypes)
    ? floor.allowedTypes
    : floorId === "ground"
    ? ["veg"]
    : ["veg", "nonveg", "bar"];

  // Absolute hard safeguard for ground floor
  if (floorId === "ground" && item.type !== "veg") {
    return false;
  }

  // Check floor type permission
  if (!allowedTypes.includes(item.type)) {
    return false;
  }

  return true;
}

/**
 * Filter menu categories keeping only categories that have visible items on the floor.
 */
export function visibleCategories(categories, floor) {
  if (!Array.isArray(categories)) return [];

  return categories
    .map((cat) => {
      const items = (cat.items || []).filter((item) => isItemVisibleOnFloor(item, floor));
      return {
        ...cat,
        items
      };
    })
    .filter((cat) => cat.items.length > 0);
}

/**
 * Returns a flat list of all visible items on the floor.
 */
export function visibleItems(categories, floor) {
  if (!Array.isArray(categories)) return [];

  const flatList = [];
  for (const cat of categories) {
    if (!cat || !Array.isArray(cat.items)) continue;
    for (const item of cat.items) {
      if (isItemVisibleOnFloor(item, floor)) {
        flatList.push({
          ...item,
          category: item.category || cat.id,
          categoryName: cat.name
        });
      }
    }
  }

  return flatList;
}

export default visibleItems;
