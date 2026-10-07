import React, { useEffect } from "react";

export function ConfirmModal({
  isOpen,
  title = "Confirmation",
  message = "Are you sure you want to proceed?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isDangerous = false,
  isLoading = false
}) {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
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
          border: "1.5px solid var(--gold-border)",
          boxShadow: "0 20px 40px rgba(75, 23, 14, 0.25)",
          width: "100%",
          maxWidth: "380px",
          padding: "24px 20px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          animation: "scaleIn 0.2s ease"
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--text)",
            margin: 0
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13.5px",
            lineHeight: 1.45,
            color: "var(--muted)",
            margin: 0
          }}
        >
          {message}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "8px"
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
            {cancelText}
          </button>

          <button
            type="button"
            disabled={isLoading}
            onClick={onConfirm}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: isDangerous ? "#B91C1C" : "var(--red)",
              color: "#FFFFFF",
              fontSize: "13.5px",
              fontWeight: 700,
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.7 : 1,
              boxShadow: "0 2px 8px rgba(222, 42, 27, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            {isLoading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
