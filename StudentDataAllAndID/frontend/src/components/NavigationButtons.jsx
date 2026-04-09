import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/", icon: "🔍", label: "Search" },
  { path: "/add", icon: "➕", label: "Add" },
  { path: "/update", icon: "✏️", label: "Update" },
  { path: "/delete", icon: "🗑", label: "Delete" }
];

function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="nav-buttons" aria-label="Student action navigation">
      {navItems.map((item) => (
        <button
          key={item.path}
          type="button"
          className={`nav-button ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => navigate(item.path)}
        >
          <span className="nav-icon" aria-hidden="true">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default NavigationButtons;