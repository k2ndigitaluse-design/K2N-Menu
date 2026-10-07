import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export function AdminLogin() {
  const { currentUser, login, resetPassword, authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const from = location.state?.from?.pathname || "/admin";

  // If already logged in, redirect
  React.useEffect(() => {
    if (currentUser) {
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setStatusMessage("");

    if (!email.trim()) {
      setErrorMessage("Please enter your email address.");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setIsLoading(true);
    try {
      await login(email.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setErrorMessage(err.message || "Failed to log in.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setErrorMessage("");
    setStatusMessage("");
    if (!email.trim()) {
      setErrorMessage("Please enter your email address first to reset password.");
      return;
    }

    setIsLoading(true);
    try {
      const msg = await resetPassword(email.trim());
      setStatusMessage(msg || "Password reset email sent! Check your inbox.");
    } catch (err) {
      setErrorMessage(err.message || "Failed to send password reset email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="admin-app-container"
      style={{
        backgroundImage: "radial-gradient(ellipse at 50% 10%, rgba(245, 177, 82, 0.15) 0%, transparent 70%)",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#FFFDF9",
          borderRadius: "24px",
          border: "1.5px solid var(--gold-border)",
          boxShadow: "0 20px 45px rgba(75, 23, 14, 0.15)",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              backgroundColor: "#FAF6EE",
              border: "1px solid var(--gold-border)",
              marginBottom: "12px"
            }}
          >
            <span style={{ fontSize: "28px" }}>🏨</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "24px",
              fontWeight: 800,
              color: "var(--red)",
              margin: "0 0 6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5px"
            }}
          >
            <span>K</span>
            <span style={{ fontSize: "1.54em", display: "inline-block", lineHeight: 0.9, transform: "translateY(-1.5px)", padding: "0 1px" }}>2</span>
            <span>N&nbsp;&nbsp;Admin</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13.5px",
              color: "var(--muted)",
              margin: 0
            }}
          >
            Sign in to manage the hotel live menu
          </p>
        </div>

        {/* Status & Error feedback */}
        {errorMessage && (
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              backgroundColor: "#FEE2E2",
              border: "1px solid #FCA5A5",
              color: "#B91C1C",
              fontSize: "13px",
              lineHeight: 1.4
            }}
          >
            {errorMessage}
          </div>
        )}

        {statusMessage && (
          <div
            style={{
              padding: "10px 14px",
              borderRadius: "10px",
              backgroundColor: "#DCFCE7",
              border: "1px solid #86EFAC",
              color: "#166534",
              fontSize: "13px",
              lineHeight: 1.4
            }}
          >
            {statusMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label
              htmlFor="admin-email"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "12.5px",
                fontWeight: 700,
                color: "var(--text)"
              }}
            >
              Email Address
            </label>
            <input
              id="admin-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="owner@k2nhotels.com"
              disabled={isLoading}
              style={{
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1.5px solid rgba(172, 132, 75, 0.4)",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                backgroundColor: "#FAF6EE",
                outline: "none"
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label
                htmlFor="admin-password"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "var(--text)"
                }}
              >
                Password
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                disabled={isLoading}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "12px",
                  color: "var(--red)",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Forgot?
              </button>
            </div>
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={isLoading}
              style={{
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1.5px solid rgba(172, 132, 75, 0.4)",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                backgroundColor: "#FAF6EE",
                outline: "none"
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              marginTop: "8px",
              padding: "13px",
              borderRadius: "999px",
              backgroundColor: "var(--red)",
              color: "#FFFFFF",
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              fontWeight: 700,
              border: "none",
              cursor: isLoading ? "not-allowed" : "pointer",
              opacity: isLoading ? 0.75 : 1,
              boxShadow: "0 4px 14px rgba(222, 42, 27, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            {isLoading ? "Signing in..." : "Log in to Admin"}
          </button>
        </form>

        {/* Back to public menu */}
        <div style={{ textAlign: "center", marginTop: "4px" }}>
          <Link
            to="/"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              color: "var(--muted)",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            ← Back to Customer Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
