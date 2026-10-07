import React, { useState, useEffect } from "react";

export function DeleteCategoryModal({
  isOpen,
  categoryName = "",
  onConfirm,
  onCancel,
  isLoading = false
}) {
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTypedName("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen && !isLoading) {
        onCancel();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isLoading, onCancel]);

  if (!isOpen) return null;

  const isMatch =
    typedName.trim().toLowerCase() === (categoryName || "").trim().toLowerCase();

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoading) onCancel();
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFDF9",
          borderRadius: "20px",
          border: "1.5px solid #FCA5A5",
          boxShadow: "0 20px 45px rgba(185, 28, 28, 0.2)",
          width: "100%",
          maxWidth: "420px",
          padding: "24px 22px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          animation: "scaleIn 0.2s ease"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#FEE2E2",
              color: "#DC2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              flexShrink: 0
            }}
          >
            ⚠️
          </div>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "18px",
              fontWeight: 700,
              color: "#991B1B",
              margin: 0
            }}
          >
            Delete Category
          </h3>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13.5px",
            lineHeight: 1.5,
            color: "var(--text)",
            margin: 0
          }}
        >
          This will permanently delete the category{" "}
          <strong style={{ color: "#991B1B" }}>"{categoryName}"</strong> and all
          of its menu items.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            htmlFor="delete-cat-confirm-input"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--muted)",
              fontWeight: 600
            }}
          >
            Type <strong style={{ color: "var(--text)" }}>{categoryName}</strong> below to confirm:
          </label>
          <input
            id="delete-cat-confirm-input"
            type="text"
            value={typedName}
            onChange={(e) => setTypedName(e.target.value)}
            placeholder={categoryName}
            autoFocus
            disabled={isLoading}
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              border: "1.5px solid rgba(172, 132, 75, 0.4)",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              outline: "none",
              backgroundColor: "#FAF6EE"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "6px"
          }}
        >
          <button
            type="button"
            disabled={isLoading}
            onClick={onCancel}
            style={{
              padding: "10px 18px",
              borderRadius: "999px",
              backgroundColor: "#F3EDE2",
              color: "var(--text)",
              fontSize: "13.5px",
              fontWeight: 600,
              cursor: "pointer",
              border: "1px solid rgba(172, 132, 75, 0.3)"
            }}
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={!isMatch || isLoading}
            onClick={onConfirm}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: isMatch ? "#DC2626" : "#FCA5A5",
              color: "#FFFFFF",
              fontSize: "13.5px",
              fontWeight: 700,
              cursor: isMatch && !isLoading ? "pointer" : "not-allowed",
              opacity: isLoading ? 0.7 : 1,
              border: "none",
              boxShadow: isMatch ? "0 2px 8px rgba(220, 38, 38, 0.35)" : "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            {isLoading ? "Deleting..." : "Delete Category"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCategoryModal;
