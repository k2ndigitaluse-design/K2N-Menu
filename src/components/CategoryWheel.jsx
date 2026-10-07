import React, { useRef, useEffect } from "react";
import { useMenu } from "../context/MenuContext.jsx";

export function CategoryWheel() {
  const { visibleCategories, selectedCategory, setSelectedCategory } = useMenu();
  const scrollContainerRef = useRef(null);
  const itemsRef = useRef({});

  // Center the selected category on change
  useEffect(() => {
    const el = itemsRef.current[selectedCategory];
    const container = scrollContainerRef.current;
    if (el && container) {
      const containerWidth = container.offsetWidth;
      const elOffsetLeft = el.offsetLeft;
      const elWidth = el.offsetWidth;
      const targetScroll = elOffsetLeft - containerWidth / 2 + elWidth / 2;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  }, [selectedCategory]);

  if (!visibleCategories || visibleCategories.length <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Category Selection"
      style={{
        position: "relative",
        width: "100%",
        padding: "2px 0 4px",
        borderBottom: "1px solid rgba(172, 132, 75, 0.18)"
      }}
    >
      <div
        ref={scrollContainerRef}
        className="no-scrollbar"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "0 24px",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {visibleCategories.map((cat) => {
          const isSelected = selectedCategory === cat.id;

          return (
            <button
              key={cat.id}
              ref={(node) => {
                if (node) itemsRef.current[cat.id] = node;
              }}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                flexShrink: 0,
                scrollSnapAlign: "center",
                background: "transparent",
                border: "none",
                outline: "none",
                cursor: "pointer",
                padding: "4px 2px 6px",
                position: "relative",
                fontFamily: "var(--font-heading)",
                fontSize: isSelected ? "17px" : "14.5px",
                fontWeight: isSelected ? 700 : 500,
                color: isSelected ? "var(--red)" : "var(--muted)",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: isSelected ? 1 : 0.72,
                transform: isSelected ? "scale(1.04)" : "scale(0.96)"
              }}
            >
              <span>{cat.name}</span>

              {/* Thin red underline on active category */}
              {isSelected && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "1px",
                    left: "0",
                    right: "0",
                    height: "2.5px",
                    backgroundColor: "var(--red)",
                    borderRadius: "2px"
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default CategoryWheel;
