import React, { useState } from "react";
import { getStudentById, updateStudent } from "../services/studentService";

function UpdateStudent() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  const [message, setMessage] = useState("");
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleFetch = async (e) => {
    e.preventDefault();
    if (!id) { setMessage("❌ Please enter a student ID"); return; }
    setFetching(true);
    setMessage("");
    setFetched(false);
    try {
      const data = await getStudentById(Number(id));
      setStudent({ name: data.name, email: data.email, course: data.course });
      setFetched(true);
      setMessage("✅ Student found — edit details below and save.");
    } catch {
      setMessage("❌ Student not found. Check the ID and try again.");
      setStudent({ name: "", email: "", course: "" });
      setFetched(false);
    } finally {
      setFetching(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!id) { setMessage("❌ Please load a student first"); return; }
    setLoading(true);
    setMessage("");
    try {
      await updateStudent(Number(id), student);
      setMessage("✅ Student updated successfully!");
    } catch {
      setMessage("❌ Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-icon icon-update">✏️</div>
        <div>
          <h2>Update Student</h2>
          <p className="panel-desc">Load a student by ID, edit their details, and save.</p>
        </div>
      </div>

      {/* Step 1: Load Student */}
      <form onSubmit={handleFetch}>
        <div className="fetch-row">
          <label className="field">
            <span>Student ID</span>
            <input
              type="number"
              min="1"
              placeholder="Enter student ID (e.g. 3)"
              value={id}
              onChange={(e) => { setId(e.target.value); setFetched(false); setStudent({ name: "", email: "", course: "" }); setMessage(""); }}
              required
              disabled={fetching}
            />
          </label>
          <button className="btn-primary btn-secondary" type="submit" disabled={fetching} style={{ flexShrink: 0, marginTop: 0 }}>
            {fetching ? <><div className="spinner"></div> Loading…</> : "📥 Load Student"}
          </button>
        </div>
      </form>

      {message && (
        <p className={`status ${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}

      {/* Step 2: Edit Form */}
      {fetched && (
        <form className="student-form" onSubmit={handleUpdate} style={{ marginTop: 24 }}>
          <label className="field">
            <span>Full Name</span>
            <input
              name="name"
              placeholder="Updated name"
              value={student.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>

          <label className="field">
            <span>Email Address</span>
            <input
              name="email"
              type="email"
              placeholder="updated@email.com"
              value={student.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>

          <label className="field">
            <span>Course</span>
            <input
              name="course"
              placeholder="Updated course"
              value={student.course}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? <><div className="spinner"></div> Saving…</> : "💾 Save Changes"}
          </button>
        </form>
      )}
    </section>
  );
}

export default UpdateStudent;