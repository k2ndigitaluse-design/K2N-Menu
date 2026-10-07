import React, { useState, useEffect, useRef } from "react";
import brand from "../config/brand.js";

export function Intro({ onComplete }) {
  const videoRef = useRef(null);
  const [fading, setFading] = useState(false);
  const [fadeWhite, setFadeWhite] = useState(false);
  const completedRef = useRef(false);

  const finishIntro = () => {
    if (completedRef.current) return;
    completedRef.current = true;

    try {
      sessionStorage.setItem("k2n_intro_seen", "true");
    } catch (e) {}

    // Fade through white
    setFadeWhite(true);
    setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        onComplete();
      }, 400);
    }, 300);
  };

  useEffect(() => {
    // 3-second fallback timer in case video fails or takes too long to load
    const timeoutTimer = setTimeout(() => {
      if (!completedRef.current) {
        console.warn("[Intro] 3s load timeout reached, completing intro.");
        finishIntro();
      }
    }, 3500);

    return () => clearTimeout(timeoutTimer);
  }, []);

  return (
    <div
      className="intro-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.4s ease-out",
        overflow: "hidden"
      }}
    >
      {/* Background/Foreground Video */}
      <video
        ref={videoRef}
        src={brand.introVideoPath || "/assets/intro.mp4"}
        autoPlay
        muted
        playsInline
        onEnded={finishIntro}
        onError={(e) => {
          console.warn("[Intro] Video playback error:", e);
          finishIntro();
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />

      {/* Skip Button */}
      <button
        onClick={finishIntro}
        aria-label="Skip Introduction"
        style={{
          position: "absolute",
          top: "24px",
          right: "20px",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          backdropFilter: "blur(8px)",
          color: "#FFFFFF",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "999px",
          padding: "6px 16px",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.5px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          transition: "background-color 0.2s ease, transform 0.15s ease"
        }}
      >
        Skip &rarr;
      </button>

      {/* White flash transition for dark-to-cream transition */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#FFFFFF",
          pointerEvents: "none",
          opacity: fadeWhite ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: 5
        }}
      />
    </div>
  );
}

export default Intro;
