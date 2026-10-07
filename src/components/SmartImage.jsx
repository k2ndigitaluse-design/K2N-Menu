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
            padding: "8px",
            border: "1px solid rgba(172, 132, 75, 0.15)",
            boxSizing: "border-box"
          }}
        >
          <img
            src="/assets/logo.png"
            alt="K2N"
            style={{
              maxHeight: "45%",
              maxWidth: "65%",
              objectFit: "contain",
              opacity: 0.85,
              filter: "drop-shadow(0 2px 4px rgba(172, 132, 75, 0.2))"
            }}
          />
          <span
            style={{
              fontSize: "10px",
              fontFamily: "var(--font-heading)",
              color: "var(--gold-start)",
              fontWeight: 700,
              letterSpacing: "1.5px",
              marginTop: "4px",
              textTransform: "uppercase"
            }}
          >
            K2N HOTELS
          </span>
        </div>
      )}
    </div>
  );
}

export default SmartImage;
