import React from "react";
import { useMenu } from "../context/MenuContext.jsx";

export function ViewBar() {
  const { viewMode, setViewMode } = useMenu();

  const views = [
    {
      id: "individual",
      label: "Individual",
      icon: (isActive) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.4" : "2"} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a8.5 8.5 0 0 1 13 0" />
        </svg>
      )
    },
    {
      id: "grid",
      label: "Grid",
      icon: (isActive) => (
        <svg width="21" height="21" viewBox="0 0 24 24" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth={isActive ? "1" : "2"} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      )
    },
    {
      id: "list",
      label: "List",
      icon: (isActive) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={isActive ? "2.4" : "2"} strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      )
    }
  ];

  return (
    <footer
      role="navigation"
      aria-label="View Mode Switcher"
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        height: "var(--bottom-bar-height)",
        backgroundColor: "#FFFDFB",
        borderTop: "1px solid var(--gold-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 12px",
        zIndex: 20,
        boxShadow: "0 -4px 16px rgba(75, 23, 14, 0.06)"
      }}
    >
      {views.map((v) => {
        const isActive = viewMode === v.id;

        return (
          <button
            key={v.id}
            onClick={() => setViewMode(v.id)}
            aria-selected={isActive}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              flex: 1,
              height: "100%",
              position: "relative",
              color: isActive ? "var(--red)" : "var(--text)",
              opacity: isActive ? 1 : 0.85,
              transition: "color 0.2s ease, opacity 0.2s ease",
              cursor: "pointer"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              {v.icon(isActive)}
            </div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: isActive ? 700 : 500,
                letterSpacing: "0.2px"
              }}
            >
              {v.label}
            </span>

            {/* Active Red Underline Bar */}
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  bottom: "4px",
                  width: "28px",
                  height: "2.5px",
                  backgroundColor: "var(--red)",
                  borderRadius: "2px"
                }}
              />
            )}
          </button>
        );
      })}
    </footer>
  );
}

export default ViewBar;
