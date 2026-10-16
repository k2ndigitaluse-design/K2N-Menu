import React, { useState, useEffect, useRef } from "react";
import brand from "../config/brand.js";

export function Intro({ onComplete }) {
  const videoRef = useRef(null);
  const [fading, setFading] = useState(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const completedRef = useRef(false);

  // Smooth cross-fade into menu over 1.2s
  const startFadeOut = () => {
    if (completedRef.current) return;
    completedRef.current = true;

    setFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1200);
  };

  // Video ended naturally: hold final logo frame for 0.5s, then start 1.2s cross-fade
  const handleVideoEnded = () => {
    if (completedRef.current) return;
    setTimeout(() => {
      startFadeOut();
    }, 500);
  };

  // Skip button tapped: fade out directly
  const handleSkip = () => {
    startFadeOut();
  };

  // User taps "Tap to start" if autoplay was blocked
  const handleTapToStart = () => {
    setIsAutoplayBlocked(false);
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => {
          console.warn("[Intro] Play after user tap failed, fading to menu:", err);
          startFadeOut();
        });
    }
  };

  // Initial autoplay attempt on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.info("[Intro] Browser autoplay blocked, showing Tap to Start button:", err);
        setIsAutoplayBlocked(true);
      });
    }
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
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 1.2s ease-in-out",
        overflow: "hidden"
      }}
    >
      {/* Poster placeholder while video loads */}
      {!isVideoReady && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1
          }}
        >
          <img
            src={brand.logoPath || "/assets/logo.png"}
            alt="K2N"
            style={{
              width: "120px",
              height: "auto",
              objectFit: "contain",
              opacity: 0.9,
              filter: "drop-shadow(0 4px 16px rgba(172, 132, 75, 0.4))"
            }}
          />
        </div>
      )}

      {/* Intro Video Element */}
      <video
        ref={videoRef}
        src={brand.introVideoPath || "/assets/intro.mp4"}
        poster={brand.logoPath || "/assets/logo.png"}
        preload="auto"
        autoPlay
        muted
        playsInline
        onLoadedData={() => setIsVideoReady(true)}
        onCanPlay={() => setIsVideoReady(true)}
        onEnded={handleVideoEnded}
        onError={(e) => {
          console.warn("[Intro] Video playback error:", e);
          startFadeOut();
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "relative",
          zIndex: 2
        }}
      />

      {/* Tap to Start button if browser policy blocks muted autoplay */}
      {isAutoplayBlocked && (
        <button
          onClick={handleTapToStart}
          aria-label="Tap to start video"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 20,
            backgroundColor: "rgba(0, 0, 0, 0.78)",
            backdropFilter: "blur(12px)",
            color: "#FFFDF9",
            border: "1.5px solid var(--gold-border, #AC844B)",
            borderRadius: "999px",
            padding: "12px 26px",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 8px 28px rgba(0, 0, 0, 0.55)",
            transition: "transform 0.15s ease, background-color 0.15s ease"
          }}
        >
          <span style={{ fontSize: "14px", color: "var(--red, #DE2A1B)" }}>▶</span>
          <span>Tap to Start</span>
        </button>
      )}

      {/* Skip Button */}
      <button
        onClick={handleSkip}
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
    </div>
  );
}

export default Intro;
