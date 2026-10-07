import React from "react";
import { useMenu } from "../context/MenuContext.jsx";
import SmartImage from "../components/SmartImage.jsx";

export function ListView() {
  const { displayedItems, setViewMode, setSelectedDishIndex, brand } = useMenu();
  const currency = brand?.currency || "₹";

  const handleRowClick = (index) => {
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
      className="list-view"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "10px 16px 32px",
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
            onClick={() => handleRowClick(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleRowClick(idx);
              }
            }}
            aria-label={`${dish.name}, ${currency}${displayPrice}. Tap to view details`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px 6px",
              borderBottom: "1px solid rgba(172, 132, 75, 0.22)",
              cursor: "pointer",
              transition: "background-color 0.15s ease",
              position: "relative"
            }}
          >
            {/* Left Thumbnail (Rounded Rectangle with Gold Border) */}
            <div
              style={{
                width: "82px",
                height: "64px",
                flexShrink: 0,
                borderRadius: "12px",
                overflow: "hidden",
                border: "1.2px solid var(--gold-border)",
                boxShadow: "0 2px 8px rgba(75, 23, 14, 0.08)",
                position: "relative"
              }}
            >
              <SmartImage
                src={dish.imageUrl}
                alt={dish.name}
                targetWidth={200}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Middle: Dish Details */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "3px" }}>
              {/* Row: Dot + Dish Title */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "7.5px",
                    height: "7.5px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    backgroundColor: isVeg ? "var(--veg-green)" : isBar ? "#8B5CF6" : "var(--nonveg-red)"
                  }}
                />

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "15.5px",
                    fontWeight: 700,
                    color: "var(--text)",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {dish.name}
                </h3>
              </div>

              {/* 1-Line Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  color: "var(--muted)",
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {dish.description}
              </p>
            </div>

            {/* Right: Price */}
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "16px",
                fontWeight: 700,
                color: "var(--gold-start)",
                flexShrink: 0,
                marginLeft: "auto",
                paddingLeft: "8px"
              }}
            >
              {currency}{displayPrice}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ListView;
