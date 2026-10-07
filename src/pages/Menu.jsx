import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useMenu } from "../context/MenuContext.jsx";
import Header from "../components/Header.jsx";
import TypeSwitch from "../components/TypeSwitch.jsx";
import CategoryWheel from "../components/CategoryWheel.jsx";
import IndividualView from "../views/IndividualView.jsx";
import GridView from "../views/GridView.jsx";
import ListView from "../views/ListView.jsx";
import ViewBar from "../components/ViewBar.jsx";

export function Menu() {
  const { floorParam } = useParams();
  const { floorId, setFloor, viewMode, loading, error } = useMenu();

  // Validate floorParam or sync floor
  useEffect(() => {
    if (floorParam && (floorParam === "ground" || floorParam === "top")) {
      if (floorId !== floorParam) {
        setFloor(floorParam);
      }
    }
  }, [floorParam, floorId, setFloor]);

  // If invalid floor route, redirect to root
  if (floorParam && floorParam !== "ground" && floorParam !== "top") {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh", gap: "16px" }}>
        <div
          className="shimmer"
          style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        />
        <div
          className="shimmer"
          style={{ width: "160px", height: "20px", borderRadius: "8px" }}
        />
        <p style={{ color: "var(--muted)", fontSize: "14px", marginTop: "12px" }}>
          Preparing K2N Menu...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "48px 24px", textAlign: "center", color: "var(--text)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", marginBottom: "12px" }}>Menu Unavailable</h2>
        <p style={{ color: "var(--muted)", marginBottom: "20px" }}>Menu is loading, please refresh</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: "var(--red)",
            color: "#FFF",
            padding: "10px 24px",
            borderRadius: "999px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Refresh Menu
        </button>
      </div>
    );
  }

  const { rawMenu } = useMenu();

  if (!rawMenu || rawMenu.length === 0) {
    return (
      <div className="menu-page" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", overflow: "hidden" }}>
        <Header />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", color: "var(--text)", marginBottom: "8px" }}>
            Menu coming soon
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "14px", maxWidth: "280px" }}>
            We are curating an exquisite dining experience for this floor. Please check back shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="menu-page"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "hidden"
      }}
    >
      {/* Top Fixed Header Section */}
      <div style={{ flexShrink: 0 }}>
        {/* 1. Header (Logo, Glow, Floor Pill, Pure Veg Badge) */}
        <Header />

        {/* 2. Type Switch (Top floor only: Veg / Non-Veg / Bar) */}
        <TypeSwitch />

        {/* 3. Category Wheel (Text only, centered, red underline) */}
        <CategoryWheel />
      </div>

      {/* 4. Scrollable Main Content Area */}
      <main
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {viewMode === "individual" && <IndividualView />}
        {viewMode === "grid" && <GridView />}
        {viewMode === "list" && <ListView />}
      </main>

      {/* 5. Fixed Bottom View Switcher Bar */}
      <ViewBar />
    </div>
  );
}

export default Menu;
