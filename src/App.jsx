import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MenuProvider } from "./context/MenuContext.jsx";
import FloorChooser from "./pages/FloorChooser.jsx";
import Menu from "./pages/Menu.jsx";
import Intro from "./pages/Intro.jsx";
import brand from "./config/brand.js";

// Admin Imports
import { AuthProvider } from "./admin/context/AuthContext.jsx";
import { ProtectedRoute } from "./admin/components/ProtectedRoute.jsx";
import AdminLogin from "./admin/pages/AdminLogin.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import FloorAdmin from "./admin/pages/FloorAdmin.jsx";
import "./admin/styles/admin.css";

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
      <AuthProvider>
        <Routes>
          {/* Admin Routes (Full Width / Responsive) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/:floorId"
            element={
              <ProtectedRoute>
                <FloorAdmin />
              </ProtectedRoute>
            }
          />

          {/* Customer Facing Routes (App Frame) */}
          <Route
            path="/*"
            element={
              <FloorAwareMenuProvider>
                <div className="app-frame">
                  <Routes>
                    <Route path="/" element={<RootRoute />} />
                    <Route path="/ground" element={<FloorMenuRoute floor="ground" />} />
                    <Route path="/top" element={<FloorMenuRoute floor="top" />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </div>
              </FloorAwareMenuProvider>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
