import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "20px" }}>
      <button onClick={() => navigate("/")}>🔍 Search</button>
      <button onClick={() => navigate("/add")}>➕ Add</button>
      <button onClick={() => navigate("/update")}>✏️ Update</button>
      <button onClick={() => navigate("/delete")}>🗑 Delete</button>
    </div>
  );
}

export default NavigationButtons;