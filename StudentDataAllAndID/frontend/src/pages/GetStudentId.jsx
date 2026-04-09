import React, { useState } from "react";
import { getStudentById } from "../services/studentService";

function GetStudentId() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getInitials = (name = "") =>
    name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!id) { setError("Please enter a student ID"); setStudent(null); return; }
    setLoading(true);
    setError("");
    setStudent(null);
    try {
      const data = await getStudentById(Number(id));
      setStudent(data);
    } catch {
      setError("❌ Student not found. Please check the ID and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-icon icon-search">🔍</div>
        <div>
          <h2>Search Student</h2>
          <p className="panel-desc">Look up a student's details by their unique ID.</p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSearch}>
        <div className="fetch-row">
          <label className="field">
            <span>Student ID</span>
            <input
              type="number"
              min="1"
              placeholder="Enter student ID (e.g. 1)"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              disabled={loading}
            />
          </label>
          <button className="btn-primary" type="submit" disabled={loading} style={{ flexShrink: 0, marginTop: 0 }}>
            {loading ? <><div className="spinner"></div> Searching…</> : "🔍 Search"}
          </button>
        </div>
      </form>

      {error && <p className="status error">{error}</p>}

      {student && (
        <div className="result-card">
          <div className="result-card-header">
            <div
              className="avatar"
              style={{ background: `hsl(${(student.id * 47) % 360}, 65%, 50%)` }}
            >
              {getInitials(student.name)}
            </div>
            <div>
              <h3>{student.name}</h3>
              <span className="student-id-badge">Student ID: #{student.id}</span>
            </div>
          </div>
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">📧 Email</span>
              <span className="detail-value">{student.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📚 Course</span>
              <span className="detail-value">
                <span className="course-badge">{student.course}</span>
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🆔 Record ID</span>
              <span className="detail-value">{student.id}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GetStudentId;