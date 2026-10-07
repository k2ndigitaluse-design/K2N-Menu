import React, { useState, useRef } from "react";
import { uploadToCloudinary } from "../utils/imageUpload.js";

export function ItemEditRow({
  item,
  index,
  floorId,
  isSingleItem,
  onChange,
  onDelete
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  const handleFieldChange = (field, value) => {
    onChange(index, {
      ...item,
      [field]: value
    });
  };

  const handleFileSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError("");

    try {
      const secureUrl = await uploadToCloudinary(file);
      handleFieldChange("imageUrl", secureUrl);
    } catch (err) {
      console.error("Upload failed:", err);
      setUploadError(err.message || "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemovePhoto = () => {
    handleFieldChange("imageUrl", "");
  };

  const isGround = floorId === "ground";

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: "1px solid rgba(172, 132, 75, 0.25)",
        boxShadow: "0 2px 10px rgba(75, 23, 14, 0.05)",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        position: "relative"
      }}
    >
      {/* Top row: Image & main fields */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "84px 1fr",
          gap: "14px",
          alignItems: "start"
        }}
      >
        {/* Photo Box */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <div
            style={{
              width: "84px",
              height: "84px",
              borderRadius: "12px",
              backgroundColor: "#FAF6EE",
              border: "1px dashed rgba(172, 132, 75, 0.4)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.name || "Dish item"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "10.5px",
                  color: "var(--muted)",
                  padding: "4px"
                }}
              >
                📷 No photo
              </div>
            )}

            {isUploading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: 600
                }}
              >
                <span className="spinner" style={{ width: "16px", height: "16px", borderWidth: "2px" }} />
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: "none" }}
          />

          <div style={{ display: "flex", gap: "4px" }}>
            <button
              type="button"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              style={{
                flex: 1,
                padding: "4px 6px",
                fontSize: "11px",
                borderRadius: "6px",
                backgroundColor: "#F3EDE2",
                border: "1px solid rgba(172, 132, 75, 0.3)",
                color: "var(--text)",
                cursor: "pointer",
                fontWeight: 600,
                textAlign: "center"
              }}
            >
              {item.imageUrl ? "Change" : "Upload"}
            </button>
            {item.imageUrl && (
              <button
                type="button"
                disabled={isUploading}
                onClick={handleRemovePhoto}
                title="Remove photo"
                style={{
                  padding: "4px 6px",
                  fontSize: "11px",
                  borderRadius: "6px",
                  backgroundColor: "#FEE2E2",
                  border: "1px solid #FCA5A5",
                  color: "#DC2626",
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                ✕
              </button>
            )}
          </div>

          {uploadError && (
            <span style={{ fontSize: "10px", color: "#DC2626", lineHeight: 1.2 }}>
              {uploadError}
            </span>
          )}
        </div>

        {/* Details: Name, Price, Type */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3px" }}>
              <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Dish Name *
              </label>
              <input
                type="text"
                value={item.name || ""}
                onChange={(e) => handleFieldChange("name", e.target.value)}
                placeholder="e.g. Paneer Butter Masala"
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(172, 132, 75, 0.35)",
                  fontFamily: "var(--font-body)",
                  fontSize: "13.5px",
                  outline: "none",
                  backgroundColor: "#FAF6EE"
                }}
              />
            </div>

            <div style={{ width: "90px", display: "flex", flexDirection: "column", gap: "3px" }}>
              <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Price (₹) *
              </label>
              <input
                type="number"
                min="1"
                step="1"
                value={item.price ?? ""}
                onChange={(e) => handleFieldChange("price", e.target.value === "" ? "" : Number(e.target.value))}
                placeholder="250"
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(172, 132, 75, 0.35)",
                  fontFamily: "var(--font-body)",
                  fontSize: "13.5px",
                  outline: "none",
                  backgroundColor: "#FAF6EE"
                }}
              />
            </div>
          </div>

          {/* Type Selector (if top floor) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Type:
              </label>
              {isGround ? (
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 8px",
                    borderRadius: "6px",
                    backgroundColor: "#DCFCE7",
                    color: "#166534",
                    fontSize: "11.5px",
                    fontWeight: 700
                  }}
                >
                  🟢 Pure Veg (Ground Floor)
                </span>
              ) : (
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
              )}
            </div>

            {/* Delete Item Trash Button */}
            <button
              type="button"
              onClick={() => onDelete(index)}
              disabled={isSingleItem}
              title={isSingleItem ? "A category must have at least 1 item" : "Delete dish"}
              style={{
                padding: "6px 10px",
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
      </div>

      {/* Description Textarea */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Description (optional)
        </label>
        <textarea
          rows={2}
          value={item.description || ""}
          onChange={(e) => handleFieldChange("description", e.target.value)}
          placeholder="Brief appetizing description of ingredients, spices, or preparation..."
          style={{
            padding: "8px 10px",
            borderRadius: "8px",
            border: "1px solid rgba(172, 132, 75, 0.35)",
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            lineHeight: 1.4,
            outline: "none",
            backgroundColor: "#FAF6EE",
            resize: "vertical"
          }}
        />
      </div>
    </div>
  );
}

export default ItemEditRow;
