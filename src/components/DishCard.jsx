import React from "react";
import SmartImage from "./SmartImage.jsx";

export function DishCard({ dish, isActive, currency = "₹" }) {
  if (!dish) return null;

  const isVeg = dish.type === "veg";
  const isAlcohol = dish.type === "alcohol";
  const displayPrice = dish.effectivePrice ?? dish.price;

  return (
    <article
      aria-label={`${dish.name}, ${currency}${displayPrice}`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "22px",
        overflow: "hidden",
        border: isActive ? "2.5px solid #F4DE8B" : "1.5px solid rgba(172, 132, 75, 0.35)",
        boxShadow: isActive ? "var(--card-shadow-hover)" : "var(--card-shadow)",
        backgroundColor: "#1F0F09",
        transition: "border 0.3s ease, box-shadow 0.3s ease"
      }}
    >
      {/* Background Dish Image */}
      <SmartImage
        src={dish.imageUrl}
        alt={dish.name}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          objectFit: "cover"
        }}
      />

      {/* Dark Brown Gradient Overlay at Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 14px 12px",
          background: "linear-gradient(to top, rgba(32, 10, 6, 0.96) 0%, rgba(32, 10, 6, 0.82) 60%, rgba(32, 10, 6, 0) 100%)",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          zIndex: 2
        }}
      >
        {/* Row 1: Name + Dietary Dot on Left, Red Tag with Yellow Price on Right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            {/* Veg / Non-veg dot */}
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                flexShrink: 0,
                backgroundColor: isVeg ? "var(--veg-green)" : isAlcohol ? "#A78BFA" : "var(--nonveg-red)",
                boxShadow: isVeg
                  ? "0 0 5px rgba(36, 150, 63, 0.8)"
                  : "0 0 5px rgba(222, 42, 27, 0.8)"
              }}
            />

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "17px",
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                margin: 0
              }}
            >
              {dish.name}
            </h2>
          </div>

          {/* Price Tag: Bold Yellow on Red Pill */}
          <div
            style={{
              backgroundColor: "var(--red)",
              color: "var(--yellow)",
              fontFamily: "var(--font-body)",
              fontSize: "13.5px",
              fontWeight: 800,
              padding: "3px 9px",
              borderRadius: "7px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.35)",
              flexShrink: 0,
              letterSpacing: "0.5px"
            }}
          >
            {currency}{displayPrice}
          </div>
        </div>

        {/* Row 2: Description in light cream, max 2 lines */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11.5px",
            lineHeight: 1.3,
            color: "rgba(249, 245, 239, 0.9)",
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {dish.description}
        </p>
      </div>
    </article>
  );
}

export default DishCard;
