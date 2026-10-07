import React from "react";
import { useNavigate } from "react-router-dom";
import brand from "../config/brand.js";

export function FloorChooser() {
  const navigate = useNavigate();

  return (
    <main
      className="floor-chooser"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "32px 24px",
        textAlign: "center",
        position: "relative"
      }}
    >
      {/* Soft Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "320px",
          height: "320px",
          background: "radial-gradient(circle at center, rgba(244, 222, 139, 0.45) 0%, rgba(249, 245, 239, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "360px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Brand Logo */}
        <img
          src={brand.logoPath || "/assets/logo.png"}
          alt={brand.name || "K2N"}
          style={{
            height: "120px",
            width: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 6px 14px rgba(172, 132, 75, 0.25))",
            marginBottom: "6px"
          }}
        />

        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "14px",
            letterSpacing: "4px",
            color: "var(--red)",
            fontWeight: 800,
            marginBottom: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5px"
          }}
        >
          <span>K</span>
          <span
            style={{
              fontSize: "1.54em",
              fontWeight: 800,
              display: "inline-block",
              lineHeight: 0.9,
              transform: "translateY(-1.5px)",
              padding: "0 1px"
            }}
          >
            2
          </span>
          <span>N&nbsp;&nbsp;HOTELS</span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--muted)",
            marginBottom: "36px"
          }}
        >
          Select your floor to view today's curated menu
        </p>

        {/* Buttons Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px", width: "100%" }}>
          {/* Ground Floor Button */}
          <button
            onClick={() => navigate("/ground")}
            aria-label="Ground Floor, Pure Veg"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 22px",
              backgroundColor: "#FFFDF9",
              border: "1.8px solid var(--gold-border)",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(75, 23, 14, 0.08)",
              cursor: "pointer",
              transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
              textAlign: "left"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "var(--text)"
                  }}
                >
                  Ground Floor
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {/* Pure Veg Badge */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    backgroundColor: "#EAF7ED",
                    color: "#187332",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "999px"
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#24963F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                  </svg>
                  Pure Veg
                </span>
              </div>
            </div>

            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#F9F5EF",
                border: "1px solid var(--gold-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold-start)"
              }}
            >
              &rarr;
            </div>
          </button>

          {/* Top Floor Button */}
          <button
            onClick={() => navigate("/top")}
            aria-label="Top Floor, Veg, Non-Veg and Bar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 22px",
              backgroundColor: "#FFFDF9",
              border: "1.8px solid var(--gold-border)",
              borderRadius: "20px",
              boxShadow: "0 8px 24px rgba(75, 23, 14, 0.08)",
              cursor: "pointer",
              transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
              textAlign: "left"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "var(--text)"
                }}
              >
                Top Floor
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>
                  Veg, Non-Veg &amp; Bar
                </span>
                <div style={{ display: "inline-flex", gap: "4px", alignItems: "center" }}>
                  <span className="type-dot veg" style={{ width: "6px", height: "6px" }} />
                  <span className="type-dot nonveg" style={{ width: "6px", height: "6px" }} />
                </div>
              </div>
            </div>

            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#F9F5EF",
                border: "1px solid var(--gold-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold-start)"
              }}
            >
              &rarr;
            </div>
          </button>
        </div>

        <div
          style={{
            marginTop: "48px",
            fontSize: "12px",
            letterSpacing: "1px",
            color: "var(--muted)",
            fontStyle: "italic"
          }}
        >
          {brand.tagline || "Feel the Difference"}
        </div>
      </div>
    </main>
  );
}

export default FloorChooser;
