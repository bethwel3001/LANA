import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("lana_theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("lana_theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onEnroll={() => navigate("/enroll")} />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
     <Footer />
    </div>
  );
}

export default App;
