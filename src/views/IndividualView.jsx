import React, { useRef, useEffect, useCallback, useState } from "react";
import { useMenu } from "../context/MenuContext.jsx";
import DishCard from "../components/DishCard.jsx";
import ThumbnailWheel from "../components/ThumbnailWheel.jsx";

export function IndividualView() {
  const { displayedItems, selectedDishIndex, setSelectedDishIndex, brand, goToNextCategory, goToPrevCategory } = useMenu();
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const isInternalScroll = useRef(false);
  const scrollDebounce = useRef(null);

  // Touch Swipe State for Category Navigation
  const touchStartPos = useRef({ x: 0, y: 0, time: 0 });

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

  // Touch Start / End for Boundary Swipe detection to move to adjacent category
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartPos.current.x;
    const deltaY = touch.clientY - touchStartPos.current.y;
    const timeDiff = Date.now() - touchStartPos.current.time;

    // Fast horizontal flick/swipe
    if (timeDiff < 400 && Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
      if (deltaX < 0 && selectedDishIndex >= displayedItems.length - 1) {
        // Swiped left at the end -> next category
        goToNextCategory();
      } else if (deltaX > 0 && selectedDishIndex <= 0) {
        // Swiped right at the beginning -> prev category
        goToPrevCategory();
      }
    }
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (selectedDishIndex > 0) {
          setSelectedDishIndex((prev) => prev - 1);
        } else {
          goToPrevCategory();
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (selectedDishIndex < displayedItems.length - 1) {
          setSelectedDishIndex((prev) => prev + 1);
        } else {
          goToNextCategory();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [displayedItems.length, selectedDishIndex, setSelectedDishIndex, goToNextCategory, goToPrevCategory]);

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
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
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
