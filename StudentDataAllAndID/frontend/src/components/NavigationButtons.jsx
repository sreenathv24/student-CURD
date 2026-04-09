import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/", icon: "📋", label: "All Students" },
  { path: "/search", icon: "🔍", label: "Search" },
  { path: "/add", icon: "➕", label: "Add" },
  { path: "/update", icon: "✏️", label: "Update" },
  { path: "/delete", icon: "🗑️", label: "Delete" },
];

function NavigationButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="nav-buttons" role="tablist">
      {navItems.map((item) => (
        <button
          key={item.path}
          type="button"
          role="tab"
          aria-selected={location.pathname === item.path}
          className={`nav-button ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => navigate(item.path)}
        >
          <span className="nav-icon" aria-hidden="true">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default NavigationButtons;