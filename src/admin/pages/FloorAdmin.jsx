import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { getMenu, saveCategory, deleteCategory, importSampleMenu } from "../../data/dataSource.js";
import { ItemEditRow } from "../components/ItemEditRow.jsx";
import { ConfirmModal } from "../components/ConfirmModal.jsx";
import { DeleteCategoryModal } from "../components/DeleteCategoryModal.jsx";

export function FloorAdmin() {
  const { floorId } = useParams();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [categories, setCategories] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Edit Mode State
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null); // Draft copy
  const [initialDraftString, setInitialDraftString] = useState("");
  const [validationError, setValidationError] = useState("");
  const [successToast, setSuccessToast] = useState("");

  // Modals
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showDeleteCatModal, setShowDeleteCatModal] = useState(false);
  const [itemToDeleteIndex, setItemToDeleteIndex] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const moreMenuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(e.target)) {
        setShowMoreMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch menu data on floor change
  const loadFloorMenu = async (preserveCategoryIndex = 0) => {
    setIsLoading(true);
    try {
      const data = await getMenu(floorId);
      setCategories(data || []);
      if (data && data.length > 0) {
        const nextIdx = Math.min(preserveCategoryIndex, data.length - 1);
        setActiveCategoryIndex(Math.max(0, nextIdx));
      } else {
        setActiveCategoryIndex(0);
      }
    } catch (err) {
      console.error("Failed to load floor menu:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadFloorMenu();
    setIsEditMode(false);
    setEditingCategory(null);
  }, [floorId]);

  // Active Category Data
  const currentCategory = categories[activeCategoryIndex] || null;

  // Unsaved changes check
  const isDirty = useMemo(() => {
    if (!isEditMode || !editingCategory) return false;
    return JSON.stringify(editingCategory) !== initialDraftString;
  }, [isEditMode, editingCategory, initialDraftString]);

  // Browser onbeforeunload
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  // Enter Edit Mode
  const startEditing = (categoryToEdit = null) => {
    const target = categoryToEdit || currentCategory;
    if (!target) return;
    const draft = JSON.parse(JSON.stringify(target));
    setEditingCategory(draft);
    setInitialDraftString(JSON.stringify(draft));
    setValidationError("");
    setIsEditMode(true);
    setShowMoreMenu(false);
  };

  // Create new category
  const handleAddNewCategory = () => {
    if (isEditMode) return;
    const newCatNumber = categories.length + 1;
    const newCat = {
      id: `category_${Date.now()}`,
      name: `Category ${newCatNumber}`,
      order: categories.length + 1,
      items: [
        {
          id: `item_${Date.now()}`,
          name: "",
          price: "",
          description: "",
          type: "veg",
          imageUrl: ""
        }
      ]
    };
    setEditingCategory(newCat);
    setInitialDraftString(JSON.stringify(newCat));
    setValidationError("");
    setIsEditMode(true);
  };

  // Cancel Edit
  const handleCancelClick = () => {
    if (isDirty) {
      setShowCancelModal(true);
    } else {
      setIsEditMode(false);
      setEditingCategory(null);
    }
  };

  const confirmCancel = () => {
    setShowCancelModal(false);
    setIsEditMode(false);
    setEditingCategory(null);
    setValidationError("");
  };

  // Item Changes
  const handleItemChange = (index, updatedItem) => {
    if (!editingCategory) return;
    const updatedItems = [...editingCategory.items];
    updatedItems[index] = updatedItem;
    setEditingCategory({
      ...editingCategory,
      items: updatedItems
    });
  };

  const handleAddItem = () => {
    if (!editingCategory) return;
    const newItem = {
      id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      name: "",
      price: "",
      description: "",
      type: "veg",
      imageUrl: ""
    };
    setEditingCategory({
      ...editingCategory,
      items: [...editingCategory.items, newItem]
    });
  };

  const handleDeleteItem = (index) => {
    if (!editingCategory || editingCategory.items.length <= 1) return;
    const updatedItems = editingCategory.items.filter((_, i) => i !== index);
    setEditingCategory({
      ...editingCategory,
      items: updatedItems
    });
    setItemToDeleteIndex(null);
  };

  // Save Category
  const handleSaveCategory = async () => {
    if (!editingCategory) return;
    setValidationError("");

    const name = (editingCategory.name || "").trim();
    if (!name) {
      setValidationError("Category name cannot be empty.");
      return;
    }

    // Name uniqueness on this floor (case-insensitive, exclude current if updating)
    const isDuplicate = categories.some((c) => {
      if (c.id === editingCategory.id) return false;
      return c.name.trim().toLowerCase() === name.toLowerCase();
    });

    if (isDuplicate) {
      setValidationError(`A category named "${name}" already exists on this floor.`);
      return;
    }

    if (!editingCategory.items || editingCategory.items.length === 0) {
      setValidationError("Category must contain at least 1 item.");
      return;
    }

    // Validate each item
    for (let i = 0; i < editingCategory.items.length; i++) {
      const it = editingCategory.items[i];
      if (!it.name || !it.name.trim()) {
        setValidationError(`Item #${i + 1} must have a name.`);
        return;
      }
      const numPrice = Number(it.price);
      if (isNaN(numPrice) || numPrice <= 0) {
        setValidationError(`Item "${it.name}" must have a valid price greater than ₹0.`);
        return;
      }
    }

    setIsSaving(true);
    try {
      const sanitizedCategory = {
        ...editingCategory,
        name,
        order: editingCategory.order || activeCategoryIndex + 1,
        items: editingCategory.items.map((it) => ({
          ...it,
          name: it.name.trim(),
          price: Number(it.price),
          description: (it.description || "").trim(),
          type: floorId === "ground" ? "veg" : (it.type || "veg"),
          imageUrl: it.imageUrl || ""
        }))
      };

      await saveCategory(floorId, sanitizedCategory.id, sanitizedCategory);

      // Re-fetch updated list
      const updated = await getMenu(floorId);
      setCategories(updated);

      const targetIdx = updated.findIndex((c) => c.id === sanitizedCategory.id);
      setActiveCategoryIndex(targetIdx >= 0 ? targetIdx : 0);

      setIsEditMode(false);
      setEditingCategory(null);
      setSuccessToast("Category saved successfully!");
      setTimeout(() => setSuccessToast(""), 3000);
    } catch (err) {
      console.error("Save failed:", err);
      setValidationError(err.message || "Failed to save category.");
    } finally {
      setIsSaving(false);
    }
  };

  // Delete Category
  const handleDeleteCategoryConfirm = async () => {
    if (!currentCategory) return;
    setIsSaving(true);
    try {
      await deleteCategory(floorId, currentCategory.id);
      setShowDeleteCatModal(false);
      const nextIdx = Math.max(0, activeCategoryIndex - 1);
      await loadFloorMenu(nextIdx);
      setSuccessToast("Category deleted.");
      setTimeout(() => setSuccessToast(""), 3000);
    } catch (err) {
      console.error("Delete category failed:", err);
    } finally {
      setIsSaving(false);
    }
  };

  // Import Sample Menu
  const handleImportSample = async () => {
    setIsSaving(true);
    try {
      await importSampleMenu(floorId);
      await loadFloorMenu(0);
      setSuccessToast("Sample menu imported!");
      setTimeout(() => setSuccessToast(""), 3000);
    } catch (err) {
      console.error("Import failed:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const isGround = floorId === "ground";
  const floorTitle = isGround ? "Ground Floor (Pure Veg)" : "Top Floor (Multicuisine & Bar)";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        paddingBottom: isEditMode ? "100px" : "40px"
      }}
    >
      {/* Toast Notification */}
      {successToast && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#166534",
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: "999px",
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
            zIndex: 10000,
            fontSize: "13.5px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            animation: "slideDown 0.2s ease"
          }}
        >
          ✓ {successToast}
        </div>
      )}

      {/* Top Bar */}
      <header
        style={{
          backgroundColor: "#FFFDF9",
          borderBottom: "1px solid var(--gold-border)",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 2px 10px rgba(75, 23, 14, 0.05)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            type="button"
            disabled={isEditMode}
            onClick={() => navigate("/admin")}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "#F3EDE2",
              border: "1px solid rgba(172, 132, 75, 0.3)",
              color: "var(--text)",
              fontSize: "12.5px",
              fontWeight: 600,
              cursor: isEditMode ? "not-allowed" : "pointer",
              opacity: isEditMode ? 0.4 : 1
            }}
          >
            ← Floors
          </button>
          <div>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "16px",
                fontWeight: 800,
                color: "var(--text)",
                margin: 0
              }}
            >
              {floorTitle}
            </h1>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }} ref={moreMenuRef}>
          {/* More options (VIEW mode only) */}
          {!isEditMode && currentCategory && (
            <button
              type="button"
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              aria-label="More options"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                backgroundColor: "#F3EDE2",
                border: "1px solid rgba(172, 132, 75, 0.3)",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ⋮
            </button>
          )}

          {/* More Dropdown Menu */}
          {showMoreMenu && (
            <div
              style={{
                position: "absolute",
                top: "42px",
                right: 0,
                backgroundColor: "#FFFDF9",
                borderRadius: "12px",
                border: "1px solid var(--gold-border)",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                width: "180px",
                padding: "6px",
                display: "flex",
                flexDirection: "column",
                zIndex: 1000
              }}
            >
              <button
                type="button"
                disabled={categories.length <= 1}
                onClick={() => {
                  setShowMoreMenu(false);
                  setShowDeleteCatModal(true);
                }}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "transparent",
                  color: categories.length <= 1 ? "#A8A29E" : "#DC2626",
                  fontSize: "12.5px",
                  fontWeight: 600,
                  textAlign: "left",
                  cursor: categories.length <= 1 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                🗑️ Delete Category
              </button>
              {categories.length <= 1 && (
                <span style={{ fontSize: "10.5px", color: "var(--muted)", padding: "0 12px 6px" }}>
                  Cannot delete only remaining category
                </span>
              )}
            </div>
          )}

          <button
            type="button"
            disabled={isEditMode}
            onClick={async () => {
              await logout();
              navigate("/admin/login");
            }}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              backgroundColor: "#FEE2E2",
              border: "1px solid #FCA5A5",
              color: "#DC2626",
              fontSize: "12px",
              fontWeight: 600,
              cursor: isEditMode ? "not-allowed" : "pointer",
              opacity: isEditMode ? 0.4 : 1
            }}
          >
            Log out
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ maxWidth: "680px", width: "100%", margin: "0 auto", padding: "16px 14px", flex: 1 }}>
        {isLoading ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div className="spinner" style={{ margin: "0 auto 12px" }} />
            <p style={{ color: "var(--muted)", fontSize: "14px" }}>Loading menu...</p>
          </div>
        ) : categories.length === 0 && !isEditMode ? (
          /* Empty floor state */
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              backgroundColor: "#FFFDF9",
              borderRadius: "20px",
              border: "1.5px dashed var(--gold-border)",
              marginTop: "20px"
            }}
          >
            <div style={{ fontSize: "42px", marginBottom: "12px" }}>📋</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "18px", color: "var(--text)", margin: "0 0 6px" }}>
              No categories found on {isGround ? "Ground Floor" : "Top Floor"}
            </h2>
            <p style={{ fontSize: "13.5px", color: "var(--muted)", marginBottom: "20px" }}>
              Get started by creating your first category or importing sample dishes.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                type="button"
                onClick={handleAddNewCategory}
                style={{
                  padding: "10px 20px",
                  borderRadius: "999px",
                  backgroundColor: "var(--red)",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "13.5px",
                  border: "none",
                  cursor: "pointer"
                }}
              >
                + Create First Category
              </button>
              <button
                type="button"
                onClick={handleImportSample}
                disabled={isSaving}
                style={{
                  padding: "10px 20px",
                  borderRadius: "999px",
                  backgroundColor: "#F3EDE2",
                  color: "var(--text)",
                  fontWeight: 600,
                  fontSize: "13.5px",
                  border: "1px solid rgba(172, 132, 75, 0.35)",
                  cursor: isSaving ? "not-allowed" : "pointer"
                }}
              >
                {isSaving ? "Importing..." : "📥 Import Sample Menu"}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Category Navigation Bar (VIEW mode only) */}
            {!isEditMode && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFDF9",
                  borderRadius: "16px",
                  border: "1px solid var(--gold-border)",
                  padding: "10px 14px",
                  marginBottom: "16px",
                  boxShadow: "0 2px 8px rgba(75, 23, 14, 0.04)"
                }}
              >
                {/* Prev category button */}
                <button
                  type="button"
                  disabled={activeCategoryIndex <= 0}
                  onClick={() => setActiveCategoryIndex((prev) => Math.max(0, prev - 1))}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(172, 132, 75, 0.3)",
                    backgroundColor: activeCategoryIndex <= 0 ? "#F5F5F5" : "#F3EDE2",
                    color: activeCategoryIndex <= 0 ? "#C4C4C4" : "var(--text)",
                    fontSize: "16px",
                    fontWeight: 700,
                    cursor: activeCategoryIndex <= 0 ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  title="Previous category"
                >
                  ‹
                </button>

                {/* Current Category Name & Edit trigger */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "17px",
                      fontWeight: 800,
                      color: "var(--text)",
                      margin: 0
                    }}
                  >
                    {currentCategory?.name || "Category"}
                  </h2>
                  <button
                    type="button"
                    onClick={() => startEditing(currentCategory)}
                    style={{
                      padding: "4px 8px",
                      borderRadius: "6px",
                      backgroundColor: "#FAF6EE",
                      border: "1px solid rgba(172, 132, 75, 0.35)",
                      color: "var(--red)",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    ✎ Edit
                  </button>
                </div>

                {/* Next category or + Add category */}
                {activeCategoryIndex < categories.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveCategoryIndex((prev) => Math.min(categories.length - 1, prev + 1))}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      border: "1px solid rgba(172, 132, 75, 0.3)",
                      backgroundColor: "#F3EDE2",
                      color: "var(--text)",
                      fontSize: "16px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    title="Next category"
                  >
                    ›
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleAddNewCategory}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      border: "1px solid var(--gold-dark)",
                      backgroundColor: "#FAF6EE",
                      color: "var(--gold-dark)",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                    title="Add new category"
                  >
                    + Add
                  </button>
                )}
              </div>
            )}

            {/* Category Tabs Scroll (VIEW mode) */}
            {!isEditMode && categories.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  overflowX: "auto",
                  paddingBottom: "12px",
                  marginBottom: "12px",
                  scrollbarWidth: "none"
                }}
              >
                {categories.map((cat, idx) => {
                  const isActive = idx === activeCategoryIndex;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setActiveCategoryIndex(idx)}
                      style={{
                        whiteSpace: "nowrap",
                        padding: "6px 14px",
                        borderRadius: "999px",
                        fontSize: "12.5px",
                        fontWeight: isActive ? 700 : 500,
                        backgroundColor: isActive ? "var(--red)" : "#FFFDF9",
                        color: isActive ? "#FFFFFF" : "var(--text)",
                        border: isActive ? "1px solid var(--red)" : "1px solid var(--gold-border)",
                        cursor: "pointer",
                        transition: "all 0.15s ease"
                      }}
                    >
                      {cat.name} ({cat.items?.length || 0})
                    </button>
                  );
                })}
              </div>
            )}

            {/* Validation Error Banner */}
            {validationError && (
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "10px",
                  backgroundColor: "#FEE2E2",
                  border: "1px solid #FCA5A5",
                  color: "#B91C1C",
                  fontSize: "13px",
                  marginBottom: "14px",
                  fontWeight: 600
                }}
              >
                ⚠️ {validationError}
              </div>
            )}

            {/* EDIT MODE FORM */}
            {isEditMode && editingCategory ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Category Name Input Box */}
                <div
                  style={{
                    backgroundColor: "#FFFDF9",
                    borderRadius: "16px",
                    border: "1.5px solid var(--gold-border)",
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    boxShadow: "0 2px 8px rgba(75, 23, 14, 0.05)"
                  }}
                >
                  <label
                    htmlFor="edit-category-name"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}
                  >
                    Category Name *
                  </label>
                  <input
                    id="edit-category-name"
                    type="text"
                    value={editingCategory.name || ""}
                    onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                    placeholder="e.g. Starters / Main Course / Beverages"
                    style={{
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid rgba(172, 132, 75, 0.4)",
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 700,
                      outline: "none",
                      backgroundColor: "#FAF6EE"
                    }}
                  />
                </div>

                {/* Items Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: 0
                    }}
                  >
                    Dishes in Category ({editingCategory.items?.length || 0})
                  </h3>
                  <button
                    type="button"
                    onClick={handleAddItem}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#DCFCE7",
                      border: "1px solid #86EFAC",
                      color: "#166534",
                      fontSize: "12px",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    + Add Dish
                  </button>
                </div>

                {/* List of Dish Edit Rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {editingCategory.items.map((it, idx) => (
                    <ItemEditRow
                      key={it.id || idx}
                      item={it}
                      index={idx}
                      floorId={floorId}
                      isSingleItem={editingCategory.items.length <= 1}
                      onChange={handleItemChange}
                      onDelete={() => setItemToDeleteIndex(idx)}
                    />
                  ))}
                </div>

                {/* Add Dish Bottom Button */}
                <button
                  type="button"
                  onClick={handleAddItem}
                  style={{
                    padding: "12px",
                    borderRadius: "12px",
                    border: "1.5px dashed rgba(172, 132, 75, 0.4)",
                    backgroundColor: "#FFFDF9",
                    color: "var(--text)",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    cursor: "pointer",
                    textAlign: "center"
                  }}
                >
                  + Add Another Dish
                </button>
              </div>
            ) : (
              /* VIEW MODE DISH LIST */
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {currentCategory?.items?.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: "#FFFDF9",
                      borderRadius: "16px",
                      border: "1px solid var(--gold-border)",
                      padding: "14px",
                      display: "flex",
                      gap: "14px",
                      alignItems: "center",
                      boxShadow: "0 2px 6px rgba(75, 23, 14, 0.03)"
                    }}
                  >
                    {/* Item Thumbnail */}
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "10px",
                        backgroundColor: "#FAF6EE",
                        overflow: "hidden",
                        flexShrink: 0,
                        border: "1px solid rgba(172, 132, 75, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <span style={{ fontSize: "18px" }}>🍽️</span>
                      )}
                    </div>

                    {/* Dish Info */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                        <h4
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "var(--text)",
                            margin: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {item.name}
                        </h4>
                        <span
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "15px",
                            fontWeight: 700,
                            color: "var(--gold-dark)"
                          }}
                        >
                          ₹{item.price}
                        </span>
                      </div>

                      {item.description && (
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "12.5px",
                            color: "var(--muted)",
                            margin: "4px 0 0",
                            lineHeight: 1.35,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical"
                          }}
                        >
                          {item.description}
                        </p>
                      )}

                      {!isGround && (
                        <div style={{ marginTop: "6px" }}>
                          <span
                            style={{
                              fontSize: "10.5px",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              backgroundColor:
                                item.type === "veg"
                                  ? "#DCFCE7"
                                  : item.type === "nonveg"
                                  ? "#FEE2E2"
                                  : "#FEF3C7",
                              color:
                                item.type === "veg"
                                  ? "#166534"
                                  : item.type === "nonveg"
                                  ? "#991B1B"
                                  : "#92400E",
                              fontWeight: 700
                            }}
                          >
                            {item.type === "veg"
                              ? "🟢 Veg"
                              : item.type === "nonveg"
                              ? "🔴 Non-Veg"
                              : "🍸 Bar"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* STICKY BOTTOM BAR (EDIT MODE ONLY) */}
      {isEditMode && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#FFFDF9",
            borderTop: "1.5px solid var(--gold-border)",
            padding: "12px 20px",
            boxShadow: "0 -8px 25px rgba(75, 23, 14, 0.15)",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12.5px",
              color: "var(--muted)",
              fontWeight: 600
            }}
            className="hide-mobile"
          >
            Save or cancel to leave this category
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%", justifyContent: "flex-end" }}>
            <button
              type="button"
              disabled={isSaving}
              onClick={handleCancelClick}
              style={{
                padding: "10px 20px",
                borderRadius: "999px",
                backgroundColor: "#F3EDE2",
                border: "1px solid rgba(172, 132, 75, 0.35)",
                color: "var(--text)",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Cancel
            </button>

            <button
              type="button"
              disabled={isSaving}
              onClick={handleSaveCategory}
              style={{
                padding: "10px 26px",
                borderRadius: "999px",
                backgroundColor: "var(--red)",
                border: "none",
                color: "#FFFFFF",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 700,
                cursor: isSaving ? "not-allowed" : "pointer",
                opacity: isSaving ? 0.75 : 1,
                boxShadow: "0 4px 12px rgba(222, 42, 27, 0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              {isSaving ? "Saving..." : "Save Category"}
            </button>
          </div>
        </div>
      )}

      {/* Discard Confirmation Modal */}
      <ConfirmModal
        isOpen={showCancelModal}
        title="Discard Unsaved Changes?"
        message="You have unsaved changes in this category. Are you sure you want to discard them?"
        confirmText="Discard Changes"
        cancelText="Keep Editing"
        isDangerous={true}
        onConfirm={confirmCancel}
        onCancel={() => setShowCancelModal(false)}
      />

      {/* Delete Item Confirmation Modal */}
      <ConfirmModal
        isOpen={itemToDeleteIndex !== null}
        title="Delete Dish?"
        message={`Are you sure you want to delete "${editingCategory?.items?.[itemToDeleteIndex]?.name || "this dish"}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        isDangerous={true}
        onConfirm={() => handleDeleteItem(itemToDeleteIndex)}
        onCancel={() => setItemToDeleteIndex(null)}
      />

      {/* Delete Category Modal */}
      <DeleteCategoryModal
        isOpen={showDeleteCatModal}
        categoryName={currentCategory?.name || ""}
        isLoading={isSaving}
        onConfirm={handleDeleteCategoryConfirm}
        onCancel={() => setShowDeleteCatModal(false)}
      />
    </div>
  );
}

export default FloorAdmin;
