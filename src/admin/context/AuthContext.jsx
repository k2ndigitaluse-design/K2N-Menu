import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";
import { auth, isFirebaseConfigured } from "../../lib/firebase.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      // Check local testing admin session
      const savedMock = localStorage.getItem("k2n_mock_admin");
      if (savedMock) {
        setCurrentUser({ email: savedMock, uid: "mock-owner-uid" });
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    setAuthError(null);

    if (!isFirebaseConfigured || !auth) {
      // Fallback for local testing before user connects real Firebase keys
      if (email && password.length >= 6) {
        const mockUser = { email, uid: "mock-owner-uid" };
        localStorage.setItem("k2n_mock_admin", email);
        setCurrentUser(mockUser);
        return mockUser;
      } else {
        throw new Error("Password must be at least 6 characters.");
      }
    }

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      return userCred.user;
    } catch (err) {
      let message = "Failed to log in. Please check your credentials.";
      if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        message = "Incorrect email or password.";
      } else if (err.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      } else if (err.code === "auth/too-many-requests") {
        message = "Too many failed attempts. Please try again later or reset password.";
      }
      setAuthError(message);
      throw new Error(message);
    }
  };

  const logout = async () => {
    localStorage.removeItem("k2n_mock_admin");
    if (auth) {
      await signOut(auth);
    }
    setCurrentUser(null);
  };

  const resetPassword = async (email) => {
    if (!email) {
      throw new Error("Please enter your email address first.");
    }
    if (!isFirebaseConfigured || !auth) {
      return "Password reset email simulated (Firebase not configured in .env.local).";
    }
    try {
      await sendPasswordResetEmail(auth, email);
      return "Password reset link sent to your email!";
    } catch (err) {
      let message = "Failed to send reset email.";
      if (err.code === "auth/user-not-found") {
        message = "No account found with this email.";
      } else if (err.code === "auth/invalid-email") {
        message = "Please enter a valid email address.";
      }
      throw new Error(message);
    }
  };

  const value = {
    currentUser,
    loading,
    authError,
    login,
    logout,
    resetPassword,
    isConfigured: isFirebaseConfigured
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

export default AuthContext;
