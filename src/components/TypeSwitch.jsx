import React from "react";
import { useMenu } from "../context/MenuContext.jsx";

export function TypeSwitch() {
  const { floorId, selectedType, setSelectedType } = useMenu();

  // Top floor only
  if (floorId !== "top") return null;

  const options = [
    { id: "veg", label: "Veg", dot: "veg" },
    { id: "nonveg", label: "Non-Veg", dot: "nonveg" },
    { id: "bar", label: "Bar", icon: "bar" }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "6px 16px 10px", position: "relative", zIndex: 5 }}>
      {/* 3-Option Capsule Switch */}
      <div
        role="tablist"
        aria-label="Dietary Type Switch"
        style={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#FFFDF9",
          border: "1.5px solid var(--gold-border)",
          borderRadius: "999px",
          padding: "4px",
          gap: "4px",
          boxShadow: "0 2px 8px rgba(172, 132, 75, 0.12)"
        }}
      >
        {options.map((opt) => {
          const isSelected = selectedType === opt.id;
          return (
            <button
              key={opt.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedType(opt.id)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "13.5px",
                fontWeight: isSelected ? 600 : 500,
                color: isSelected ? "#FFFFFF" : "var(--text)",
                backgroundColor: isSelected ? "var(--red)" : "transparent",
                transition: "background-color 0.22s ease, color 0.22s ease, transform 0.15s ease",
                cursor: "pointer",
                boxShadow: isSelected ? "0 2px 6px rgba(222, 42, 27, 0.3)" : "none"
              }}
            >
              {/* Green/Red dot or Glass icon */}
              {opt.dot === "veg" && (
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: isSelected ? "#A6F4BE" : "var(--veg-green)",
                    display: "inline-block"
                  }}
                />
              )}
              {opt.dot === "nonveg" && !isSelected && (
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--nonveg-red)",
                    display: "inline-block"
                  }}
                />
              )}
              {opt.icon === "bar" && (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isSelected ? "#FFFFFF" : "var(--gold-start)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 22h8" />
                  <path d="M12 15v7" />
                  <path d="m19 3-4.5 9h-5L5 3z" />
                </svg>
              )}

              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Legal Age Notice when Bar is selected */}
      {selectedType === "bar" && (
        <div
          role="note"
          style={{
            marginTop: "6px",
            fontSize: "11px",
            color: "var(--muted)",
            fontStyle: "italic",
            textAlign: "center",
            maxWidth: "320px",
            animation: "fadeIn 0.3s ease"
          }}
        >
          Alcohol is served only to guests of legal drinking age.
        </div>
      )}
    </div>
  );
}

export default TypeSwitch;
