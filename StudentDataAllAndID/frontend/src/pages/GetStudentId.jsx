import React, { useState } from "react";
import { getStudentById } from "../services/studentService";
import NavigationButtons from "../components/NavigationButtons";

function GetStudentId() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!id) {
      setError("Please enter ID");
      return;
    }

    try {
      const data = await getStudentById(Number(id));
      setStudent(data);
      setError("");
    } catch {
      setStudent(null);
      setError("Student not found");
    }
  };

  return (
    <div className="container">
  
      <div className="navbar">
        <button onClick={() => navigate("/")}>🔍 Search</button>
        <button onClick={() => navigate("/add")}>➕ Add</button>
        <button onClick={() => navigate("/update")}>✏️ Update</button>
        <button onClick={() => navigate("/delete")}>🗑 Delete</button>
      </div>
  
      <div className="card">
        <h2 className="title">🔍 Get Student By ID</h2>
  
        <input
          type="number"
          placeholder="Enter Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
  
        <br />
  
        <button onClick={handleSearch}>Search</button>
  
        {error && <p style={{ color: "red" }}>{error}</p>}
  
        {student && (
          <div className="result">
            <h3>Student Details</h3>
            <p><b>ID:</b> {student.id}</p>
            <p><b>Name:</b> {student.name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Course:</b> {student.course}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetStudentId;