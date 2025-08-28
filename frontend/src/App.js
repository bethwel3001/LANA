import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("lana_theme") || "light"
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light"
    );
    localStorage.setItem("lana_theme", theme);
  }, [theme]);

  // Hide navbar + footer on these routes
  const hideNavbarFooter = ["/enroll", "/dashboard"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavbarFooter && <Navbar theme={theme} setTheme={setTheme} />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onEnroll={() => navigate("/enroll")} />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
