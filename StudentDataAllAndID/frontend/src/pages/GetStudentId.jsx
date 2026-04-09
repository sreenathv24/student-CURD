import React, { useState } from "react";
import { getStudentById } from "../services/studentService";

function GetStudentId() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!id) {
      setError("Please enter ID");
      setStudent(null);
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
    <section className="panel">
      <h2>Search Student by ID</h2>

      <form className="student-form" onSubmit={handleSearch}>
        <label className="field">
          <span>Student ID</span>
          <input
            type="number"
            min="1"
            placeholder="Enter student ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>

        <button className="btn-primary" type="submit">Search Student</button>
      </form>

      {error && <p className="status error">{error}</p>}

      {student && (
        <div className="result-card">
          <h3>Student Details</h3>
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Course:</strong> {student.course}</p>
        </div>
      )}
    </section>
  );
}

export default GetStudentId;