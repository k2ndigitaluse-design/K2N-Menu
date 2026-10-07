import React, { useState } from "react";
import { cloudinaryUrl } from "../utils/cloudinary.js";

export function SmartImage({
  src,
  alt = "K2N Dish",
  className = "",
  style = {},
  aspectRatio,
  objectFit = "cover",
  targetWidth = 600
}) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const optimizedSrc = src ? cloudinaryUrl(src, targetWidth) : "";
  const showPlaceholder = !optimizedSrc || hasError;

  return (
    <div
      className={`smart-image-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        aspectRatio: aspectRatio,
        backgroundColor: "#FAF6EF",
        ...style
      }}
    >
      {/* Shimmer Placeholder while loading real image */}
      {!showPlaceholder && !loaded && (
        <div
          className="shimmer"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1
          }}
          aria-hidden="true"
        />
      )}

      {/* Main Image */}
      {!showPlaceholder ? (
        <img
          src={optimizedSrc}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setHasError(true);
            setLoaded(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: objectFit,
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease-in-out"
          }}
        />
      ) : (
        /* Branded Placeholder (Warm cream background with K2N logo) */
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #FAF6EF 0%, #EDE4D3 100%)",
            padding: "10px",
            border: "1px solid rgba(172, 132, 75, 0.15)",
            boxSizing: "border-box",
            gap: "4px"
          }}
        >
          <img
            src="/assets/logo.png"
            alt="K2N"
            style={{
              maxHeight: "58%",
              maxWidth: "75%",
              objectFit: "contain",
              opacity: 0.95,
              filter: "drop-shadow(0 3px 6px rgba(172, 132, 75, 0.25))"
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontFamily: "var(--font-heading)",
              color: "var(--red)",
              fontWeight: 800,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5px"
            }}
          >
            <span>K</span>
            <span
              style={{
                fontSize: "1.28em",
                fontWeight: 800,
                display: "inline-block",
                lineHeight: 1,
                transform: "translateY(-0.5px)"
              }}
            >
              2
            </span>
            <span>N&nbsp;&nbsp;HOTELS</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default SmartImage;
