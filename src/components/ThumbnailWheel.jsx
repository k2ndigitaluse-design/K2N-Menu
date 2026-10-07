import React, { useRef, useEffect, useState, useCallback } from "react";
import SmartImage from "./SmartImage.jsx";

export function ThumbnailWheel({ items = [], selectedIndex = 0, onSelect }) {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(selectedIndex);
  const isUserScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Compute scale and opacity based on continuous distance from active position
  const getFisheyeStyles = (index) => {
    const dist = Math.abs(scrollProgress - index);

    let scale = 0.35;
    let opacity = 0.15;

    if (dist <= 1) {
      scale = 1.0 - dist * (1.0 - 0.8);
      opacity = 1.0 - dist * (1.0 - 0.85);
    } else if (dist <= 2) {
      const t = dist - 1;
      scale = 0.8 - t * (0.8 - 0.62);
      opacity = 0.85 - t * (0.85 - 0.6);
    } else if (dist <= 3) {
      const t = dist - 2;
      scale = 0.62 - t * (0.62 - 0.48);
      opacity = 0.6 - t * (0.6 - 0.35);
    } else if (dist <= 4) {
      const t = dist - 3;
      scale = 0.48 - t * (0.48 - 0.35);
      opacity = 0.35 - t * (0.35 - 0.15);
    } else {
      scale = 0.35;
      opacity = 0.15;
    }

    return {
      transform: `scale(${scale.toFixed(3)})`,
      opacity: opacity.toFixed(3)
    };
  };

  // Center the selected thumbnail when selectedIndex changes externally
  useEffect(() => {
    if (isUserScrolling.current) return;

    setScrollProgress(selectedIndex);
    const container = containerRef.current;
    const el = itemsRef.current[selectedIndex];

    if (container && el) {
      const targetScroll = el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2;
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  }, [selectedIndex]);

  // Handle continuous scrolling in thumbnail wheel
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container || items.length === 0) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    // Find continuous scroll progress
    let closestIndex = 0;
    let minDistance = Infinity;

    itemsRef.current.forEach((el, idx) => {
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(containerCenter - elCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    // Approximate fractional position
    const currentEl = itemsRef.current[closestIndex];
    if (currentEl) {
      const elCenter = currentEl.offsetLeft + currentEl.offsetWidth / 2;
      const offset = (containerCenter - elCenter) / (currentEl.offsetWidth + 12);
      setScrollProgress(closestIndex + offset);
    }

    // Debounce snap-select
    isUserScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
      if (closestIndex !== selectedIndex && onSelect) {
        onSelect(closestIndex);
      }
    }, 150);
  }, [items.length, selectedIndex, onSelect]);

  if (!items || items.length === 0) return null;

  return (
    <div
      aria-label="Thumbnail Navigation"
      style={{
        position: "relative",
        width: "100%",
        padding: "4px 0 6px",
        flexShrink: 0,
        overflow: "hidden"
      }}
    >
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="no-scrollbar"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "2px calc(50% - 29px)",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {items.map((dish, idx) => {
          const isSelected = idx === selectedIndex;
          const fisheye = getFisheyeStyles(idx);

          return (
            <button
              key={dish.id || idx}
              ref={(el) => (itemsRef.current[idx] = el)}
              onClick={() => {
                if (onSelect) onSelect(idx);
              }}
              aria-label={`Select ${dish.name}`}
              style={{
                flexShrink: 0,
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                overflow: "hidden",
                scrollSnapAlign: "center",
                position: "relative",
                cursor: "pointer",
                padding: 0,
                background: "#EBE3D5",
                border: isSelected ? "2.5px solid var(--red)" : "1.2px solid var(--gold-border)",
                boxShadow: isSelected
                  ? "0 0 10px rgba(222, 42, 27, 0.4), 0 3px 6px rgba(0, 0, 0, 0.15)"
                  : "0 1px 4px rgba(0, 0, 0, 0.08)",
                transition: "border 0.2s ease, box-shadow 0.2s ease, transform 0.1s linear, opacity 0.1s linear",
                ...fisheye
              }}
            >
              <SmartImage
                src={dish.imageUrl}
                alt={dish.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ThumbnailWheel;
