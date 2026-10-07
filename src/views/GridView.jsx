import React from "react";
import { useMenu } from "../context/MenuContext.jsx";
import SmartImage from "../components/SmartImage.jsx";

export function GridView() {
  const { displayedItems, setViewMode, setSelectedDishIndex, brand } = useMenu();
  const currency = brand?.currency || "₹";

  const handleCardClick = (index) => {
    setSelectedDishIndex(index);
    setViewMode("individual");
  };

  if (!displayedItems || displayedItems.length === 0) {
    return (
      <div style={{ padding: "48px 16px", textAlign: "center", color: "var(--muted)" }}>
        <p style={{ fontSize: "16px", fontWeight: 500 }}>No items available</p>
      </div>
    );
  }

  return (
    <div
      className="grid-view"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "max-content",
        alignItems: "start",
        alignContent: "start",
        gap: "14px",
        padding: "16px 14px 28px",
        width: "100%",
        flex: 1
      }}
    >
      {displayedItems.map((dish, idx) => {
        const isVeg = dish.type === "veg";
        const isBar = dish.type === "bar";
        const displayPrice = dish.effectivePrice ?? dish.price;

        return (
          <article
            key={dish.id || idx}
            onClick={() => handleCardClick(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCardClick(idx);
              }
            }}
            aria-label={`${dish.name}, ${currency}${displayPrice}. Tap to view details`}
            style={{
              backgroundColor: "#FFFDF9",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1.2px solid var(--gold-border)",
              boxShadow: "0 4px 14px rgba(75, 23, 14, 0.08)",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.18s ease, box-shadow 0.18s ease",
              position: "relative"
            }}
          >
            {/* Upper Photo */}
            <div style={{ width: "100%", height: "115px", position: "relative" }}>
              <SmartImage
                src={dish.imageUrl}
                alt={dish.name}
                targetWidth={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Bottom Row: Name with Dot on Left, Price on Right */}
            <div
              style={{
                padding: "10px 10px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "6px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
                {/* Dot */}
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    backgroundColor: isVeg ? "var(--veg-green)" : isBar ? "#8B5CF6" : "var(--nonveg-red)"
                  }}
                />

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "13.5px",
                    fontWeight: 700,
                    color: "var(--text)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    margin: 0
                  }}
                >
                  {dish.name}
                </h3>
              </div>

              {/* Price: Bold Yellow on Red Pill */}
              <div
                style={{
                  backgroundColor: "var(--red)",
                  color: "var(--yellow)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "7px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.25)",
                  flexShrink: 0,
                  letterSpacing: "0.3px"
                }}
              >
                {currency}{displayPrice}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default GridView;
