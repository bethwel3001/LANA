import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AuthModal({ open, onClose }) {
  const [tab, setTab] = useState("signup"); // "signup" | "login"
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  const handleSignup = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name")?.toString().trim();
    const email = fd.get("email")?.toString().trim();
    const password = fd.get("password")?.toString();
    const role = fd.get("role")?.toString();
    signup(name || "Learner", email || "", password || "", role || "Student");
    onClose?.();
    navigate("/dashboard");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = fd.get("email")?.toString().trim();
    const password = fd.get("password")?.toString();
    login(email || "", password || "");
    onClose?.();
    navigate("/dashboard");
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 z-[70] grid place-items-center p-4"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
      >
        <div className="card w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Join LANA</h3>
            <button onClick={onClose} className="btn-ghost rounded-xl2" aria-label="Close">
              <FiX />
            </button>
          </div>

          <div className="inline-flex rounded-xl2 bg-slate-100 dark:bg-slate-800 p-1 mb-6">
            <button
              onClick={() => setTab("signup")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${tab === "signup" ? "bg-white dark:bg-slate-900 shadow" : "opacity-70"}`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setTab("login")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold ${tab === "login" ? "bg-white dark:bg-slate-900 shadow" : "opacity-70"}`}
            >
              Log In
            </button>
          </div>

          {tab === "signup" ? (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="label">Full Name</label>
                <input name="name" type="text" placeholder="Amina N." className="input" required />
              </div>
              <div>
                <label className="label">Email</label>
                <input name="email" type="email" placeholder="amina@example.com" className="input" required />
              </div>
              <div>
                <label className="label">Password</label>
                <input name="password" type="password" placeholder="••••••••" className="input" required />
              </div>
              <div>
                <label className="label">Role</label>
                <select name="role" className="input">
                  <option>Student</option>
                  <option>Tutor</option>
                </select>
              </div>
              <button type="submit" className="btn-primary w-full">Create account</button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label">Email</label>
                <input name="email" type="email" placeholder="you@example.com" className="input" required />
              </div>
              <div>
                <label className="label">Password</label>
                <input name="password" type="password" placeholder="••••••••" className="input" required />
              </div>
              <button type="submit" className="btn-primary w-full">Log in</button>
            </form>
          )}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById("modal-root")
  );
}
