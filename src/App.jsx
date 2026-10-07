import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext.jsx";
import FloorChooser from "./pages/FloorChooser.jsx";
import Menu from "./pages/Menu.jsx";
import Intro from "./pages/Intro.jsx";
import brand from "./config/brand.js";

// Root Route handler managing Intro display on "/"
function RootRoute() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return sessionStorage.getItem("k2n_intro_seen") !== "true";
    } catch (e) {
      return false;
    }
  });

  return (
    <>
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      <FloorChooser />
    </>
  );
}

// Floor Menu Route Wrapper
function FloorMenuRoute({ floor }) {
  return <Menu />;
}

// Stage 3 Admin Placeholder
function AdminPlaceholder() {
  return (
    <div style={{ padding: "48px 24px", textAlign: "center", minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <img
        src={brand.logoPath || "/assets/logo.png"}
        alt={brand.name}
        style={{ height: "90px", marginBottom: "16px" }}
      />
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", color: "var(--text)", marginBottom: "8px" }}>
        K2N Management Portal
      </h1>
      <p style={{ color: "var(--muted)", maxWidth: "320px", marginBottom: "24px", fontSize: "14px" }}>
        Admin Portal is staged for development in Stage 3. Stay tuned for real-time menu management.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          backgroundColor: "var(--red)",
          color: "#FFF",
          padding: "10px 24px",
          borderRadius: "999px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "14px"
        }}
      >
        &larr; Return to Customer Menu
      </a>
    </div>
  );
}

// Floor-aware wrapper so MenuProvider knows initial floor
function FloorAwareMenuProvider({ children }) {
  const location = useLocation();
  const initialFloor = location.pathname.startsWith("/top") ? "top" : "ground";

  return <MenuProvider initialFloor={initialFloor}>{children}</MenuProvider>;
}

export function App() {
  useEffect(() => {
    if (brand.pageTitle) {
      document.title = brand.pageTitle;
    }
  }, []);

  return (
    <BrowserRouter>
      <FloorAwareMenuProvider>
        <div className="app-frame">
          <Routes>
            <Route path="/" element={<RootRoute />} />
            <Route path="/ground" element={<FloorMenuRoute floor="ground" />} />
            <Route path="/top" element={<FloorMenuRoute floor="top" />} />
            <Route path="/admin" element={<AdminPlaceholder />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </FloorAwareMenuProvider>
    </BrowserRouter>
  );
}

export default App;
