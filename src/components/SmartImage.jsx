import React, { useState } from "react";

export function SmartImage({
  src,
  alt = "K2N Dish",
  className = "",
  style = {},
  aspectRatio,
  objectFit = "cover"
}) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`smart-image-container ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        aspectRatio: aspectRatio,
        ...style
      }}
    >
      {/* Shimmer Placeholder */}
      {!loaded && !hasError && (
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
      {!hasError ? (
        <img
          src={src}
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
            transition: "opacity 0.35s ease-in-out"
          }}
        />
      ) : (
        /* Fallback Graphic */
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #F3EDE2 0%, #E6DBC9 100%)",
            color: "var(--muted)",
            fontSize: "12px",
            fontWeight: 500
          }}
        >
          <span>{alt || "K2N Dish"}</span>
        </div>
      )}
    </div>
  );
}

export default SmartImage;
