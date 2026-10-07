import React, { useRef, useEffect, useCallback, useState } from "react";
import { useMenu } from "../context/MenuContext.jsx";
import DishCard from "../components/DishCard.jsx";
import ThumbnailWheel from "../components/ThumbnailWheel.jsx";

export function IndividualView() {
  const { displayedItems, selectedDishIndex, setSelectedDishIndex, brand } = useMenu();
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const isInternalScroll = useRef(false);
  const scrollDebounce = useRef(null);

  // Mouse Drag State
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  // Scroll card into view when selectedDishIndex changes
  useEffect(() => {
    if (isInternalScroll.current) return;

    const container = carouselRef.current;
    const cardEl = cardRefs.current[selectedDishIndex];

    if (container && cardEl) {
      const containerWidth = container.offsetWidth;
      const targetScroll = cardEl.offsetLeft - containerWidth / 2 + cardEl.offsetWidth / 2;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  }, [selectedDishIndex]);

  // Handle Carousel Scroll & detect centered card
  const handleScroll = useCallback(() => {
    const container = carouselRef.current;
    if (!container || displayedItems.length === 0) return;

    const centerPoint = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(centerPoint - cardCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    isInternalScroll.current = true;
    if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      isInternalScroll.current = false;
      if (closestIndex !== selectedDishIndex) {
        setSelectedDishIndex(closestIndex);
      }
    }, 120);
  }, [displayedItems.length, selectedDishIndex, setSelectedDishIndex]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedDishIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedDishIndex((prev) => Math.min(displayedItems.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [displayedItems.length, setSelectedDishIndex]);

  // Mouse Drag handlers
  const onMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX;
    scrollStartLeft.current = carouselRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - dragStartX.current) * 1.5;
    carouselRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
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
      className="individual-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        minHeight: 0,
        width: "100%",
        padding: "2px 0 4px",
        overflow: "hidden"
      }}
    >
      {/* Horizontal Peek Carousel of Dish Cards */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUpOrLeave}
        onMouseLeave={onMouseUpOrLeave}
        className="no-scrollbar"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          overflowX: "auto",
          scrollSnapType: isDragging ? "none" : "x mandatory",
          padding: "6px calc(50% - 122px)", // Centers 245px card in container
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          WebkitOverflowScrolling: "touch",
          flex: 1,
          minHeight: 0
        }}
      >
        {displayedItems.map((dish, idx) => {
          const isActive = idx === selectedDishIndex;

          return (
            <div
              key={dish.id || idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              onClick={() => {
                if (idx !== selectedDishIndex) {
                  setSelectedDishIndex(idx);
                }
              }}
              style={{
                flexShrink: 0,
                width: "245px",
                height: "100%",
                maxHeight: "330px",
                scrollSnapAlign: "center",
                transform: isActive ? "scale(1)" : "scale(0.88)",
                opacity: isActive ? 1 : 0.65,
                transition: "transform 0.3s cubic-bezier(0.2, 0, 0.2, 1), opacity 0.3s ease",
                cursor: "pointer"
              }}
            >
              <DishCard
                dish={dish}
                isActive={isActive}
                currency={brand?.currency || "₹"}
              />
            </div>
          );
        })}
      </div>

      {/* Thumbnail Wheel (Fisheye wheel below card carousel) */}
      <ThumbnailWheel
        items={displayedItems}
        selectedIndex={selectedDishIndex}
        onSelect={(newIdx) => setSelectedDishIndex(newIdx)}
      />
    </div>
  );
}

export default IndividualView;
