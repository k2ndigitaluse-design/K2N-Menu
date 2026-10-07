import React from "react";

export function ItemEditRow({
  item,
  index,
  floorId,
  isSingleItem,
  onChange,
  onDelete
}) {
  const handleFieldChange = (field, value) => {
    onChange(index, {
      ...item,
      [field]: value
    });
  };

  const isGround = floorId === "ground";

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid rgba(172, 132, 75, 0.25)",
        boxShadow: "0 2px 8px rgba(75, 23, 14, 0.04)",
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "relative"
      }}
    >
      {/* Top: Name & Price */}
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
          <label
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Dish Name *
          </label>
          <input
            type="text"
            value={item.name || ""}
            onChange={(e) => handleFieldChange("name", e.target.value)}
            placeholder="e.g. Paneer Butter Masala"
            style={{
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1.2px solid rgba(172, 132, 75, 0.35)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              outline: "none",
              backgroundColor: "#FAF6EE"
            }}
          />
        </div>

        <div style={{ width: "100px", display: "flex", flexDirection: "column", gap: "4px" }}>
          <label
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Price (₹) *
          </label>
          <input
            type="number"
            min="1"
            step="1"
            value={item.price ?? ""}
            onChange={(e) =>
              handleFieldChange("price", e.target.value === "" ? "" : Number(e.target.value))
            }
            placeholder="250"
            style={{
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1.2px solid rgba(172, 132, 75, 0.35)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 700,
              outline: "none",
              backgroundColor: "#FAF6EE",
              color: "var(--gold-dark)"
            }}
          />
        </div>
      </div>

      {/* Bottom: Type Selector & Delete Button */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "2px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <label
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Type:
          </label>
          <select
            value={item.type || "veg"}
            onChange={(e) => handleFieldChange("type", e.target.value)}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              border: "1px solid rgba(172, 132, 75, 0.35)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              backgroundColor: "#FAF6EE",
              color: "var(--text)",
              outline: "none"
            }}
          >
            <option value="veg">🟢 Veg</option>
            <option value="nonveg">🔴 Non-Veg</option>
            <option value="bar">🍸 Bar / Drinks</option>
          </select>
        </div>

        {/* Delete Dish Button */}
        <button
          type="button"
          onClick={() => onDelete(index)}
          disabled={isSingleItem}
          title={isSingleItem ? "A category must have at least 1 item" : "Delete dish"}
          style={{
            padding: "5px 10px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isSingleItem ? "#F3EDE2" : "#FEE2E2",
            color: isSingleItem ? "#A8A29E" : "#DC2626",
            cursor: isSingleItem ? "not-allowed" : "pointer",
            fontSize: "12px",
            fontWeight: 600,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            opacity: isSingleItem ? 0.6 : 1
          }}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default ItemEditRow;
