import React from "react";
import { useMenu } from "../context/MenuContext.jsx";

export function Header() {
  const { brand, floorId, activeFloorConfig } = useMenu();

  const isGround = floorId === "ground";
  const floorNameUpper = (activeFloorConfig?.name || (isGround ? "Ground Floor" : "Top Floor")).toUpperCase();

  return (
    <header className="k2n-header" style={{ position: "relative", textAlign: "center", padding: "6px 12px 2px", zIndex: 10 }}>
      {/* Soft Radial Warm Light Glow behind Logo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "260px",
          height: "150px",
          background: "radial-gradient(ellipse at center, rgba(244, 222, 139, 0.48) 0%, rgba(249, 245, 239, 0) 70%)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      {/* Logo & Brand Hierarchy */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={brand?.logoPath || "/assets/logo.png"}
          alt={brand?.name || "K2N"}
          style={{
            height: "105px",
            width: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 4px 12px rgba(172, 132, 75, 0.25))"
          }}
        />

        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "13.5px",
            letterSpacing: "3.5px",
            color: "var(--red)",
            fontWeight: 800,
            marginTop: "-2px",
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
              fontSize: "1.28em",
              fontWeight: 800,
              display: "inline-block",
              lineHeight: 1,
              transform: "translateY(-1px)"
            }}
          >
            2
          </span>
          <span>N&nbsp;&nbsp;HOTELS</span>
        </div>

        {/* Floor Label with Accenting Gold Lines */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            width: "100%",
            maxWidth: "320px",
            marginTop: "0px"
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, var(--gold-border))" }} />

          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            <div
              style={{
                backgroundColor: "var(--red)",
                color: "#FFFFFF",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1.2px",
                padding: "2.5px 12px",
                borderRadius: "999px",
                boxShadow: "0 2px 6px rgba(222, 42, 27, 0.25)"
              }}
            >
              {floorNameUpper}
            </div>

            {/* Ground Floor Pure Veg Badge */}
            {isGround && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  backgroundColor: "#EAF7ED",
                  border: "1px solid #75C68A",
                  color: "#187332",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  boxShadow: "0 1px 4px rgba(36, 150, 63, 0.15)"
                }}
              >
                {/* Green Leaf SVG */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#24963F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6" />
                </svg>
                <span>Pure Veg</span>
              </div>
            )}
          </div>

          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--gold-border), transparent)" }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
