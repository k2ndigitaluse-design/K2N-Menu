import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export function AdminDashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login");
    } catch (err) {
      console.error("Failed to log out", err);
    }
  };

  return (
    <div className="admin-app-container">
      {/* Top Header */}
      <header className="admin-header">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/assets/logo.png"
            alt="K2N"
            style={{ width: "38px", height: "38px", objectFit: "contain", flexShrink: 0 }}
          />
          <div>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "18px",
                fontWeight: 800,
                color: "var(--red)",
                margin: 0,
                lineHeight: 1.2,
                display: "flex",
                alignItems: "center",
                gap: "0.5px"
              }}
            >
              <span>K</span>
              <span style={{ fontSize: "1.54em", display: "inline-block", lineHeight: 0.9, transform: "translateY(-1.5px)", padding: "0 1px" }}>2</span>
              <span>N&nbsp;&nbsp;Hotels Admin</span>
            </h1>
            <p style={{ margin: 0, fontSize: "11.5px", color: "var(--muted)" }}>
              {currentUser?.email || "Owner Portal"}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12.5px",
              fontWeight: 600,
              color: "var(--text)",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "999px",
              backgroundColor: "#F3EDE2",
              border: "1px solid rgba(172, 132, 75, 0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px"
            }}
          >
            👁️ <span className="hide-mobile">View Menu</span>
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            style={{
              fontSize: "12.5px",
              fontWeight: 600,
              color: "#DC2626",
              backgroundColor: "#FEE2E2",
              border: "1px solid #FCA5A5",
              padding: "6px 14px",
              borderRadius: "999px",
              cursor: "pointer"
            }}
          >
            Log out
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="admin-content" style={{ gap: "20px" }}>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "22px",
              fontWeight: 700,
              color: "var(--text)",
              margin: "0 0 6px"
            }}
          >
            Select Floor to Manage
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--muted)",
              margin: 0
            }}
          >
            Choose a floor to edit its categories, menu items, prices, and photos.
          </p>
        </div>

        {/* Floor Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
          {/* Ground Floor */}
          <Link
            to="/admin/ground"
            style={{
              textDecoration: "none",
              backgroundColor: "#FFFDF9",
              borderRadius: "20px",
              border: "1.5px solid var(--gold-border)",
              padding: "24px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 4px 15px rgba(75, 23, 14, 0.06)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease"
            }}
            className="hover-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  backgroundColor: "#DCFCE7",
                  border: "1.5px solid #86EFAC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  flexShrink: 0
                }}
              >
                🌱
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: 0
                    }}
                  >
                    Ground Floor
                  </h3>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "6px",
                      backgroundColor: "#DCFCE7",
                      color: "#166534",
                      fontSize: "11px",
                      fontWeight: 700
                    }}
                  >
                    Pure Veg
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--muted)",
                    margin: 0
                  }}
                >
                  Manage strictly vegetarian South & North Indian dishes
                </p>
              </div>
            </div>
            <span style={{ fontSize: "20px", color: "var(--gold-dark)", fontWeight: 700 }}>
              ➔
            </span>
          </Link>

          {/* Top Floor */}
          <Link
            to="/admin/top"
            style={{
              textDecoration: "none",
              backgroundColor: "#FFFDF9",
              borderRadius: "20px",
              border: "1.5px solid var(--gold-border)",
              padding: "24px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 4px 15px rgba(75, 23, 14, 0.06)",
              transition: "transform 0.15s ease, box-shadow 0.15s ease"
            }}
            className="hover-card"
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  backgroundColor: "#FEF3C7",
                  border: "1.5px solid #FCD34D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  flexShrink: 0
                }}
              >
                🍸
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--text)",
                      margin: 0
                    }}
                  >
                    Top Floor
                  </h3>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "6px",
                      backgroundColor: "#FEF3C7",
                      color: "#92400E",
                      fontSize: "11px",
                      fontWeight: 700
                    }}
                  >
                    Multicuisine & Bar
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--muted)",
                    margin: 0
                  }}
                >
                  Manage Veg, Non-Veg appetizers, mains & Bar beverages
                </p>
              </div>
            </div>
            <span style={{ fontSize: "20px", color: "var(--gold-dark)", fontWeight: 700 }}>
              ➔
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
