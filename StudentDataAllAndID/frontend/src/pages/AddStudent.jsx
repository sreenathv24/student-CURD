import React, { useState } from "react";
import { createStudent } from "../services/studentService";

function AddStudent() {
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await createStudent(student);
      setMessage("✅ Student added successfully!");
      setStudent({ name: "", email: "", course: "" });
    } catch {
      setMessage("❌ Error adding student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-icon icon-add">➕</div>
        <div>
          <h2>Add Student</h2>
          <p className="panel-desc">Register a new student by filling in the details below.</p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Full Name</span>
          <input
            name="name"
            placeholder="e.g. John Doe"
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
            placeholder="student@example.com"
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
            placeholder="e.g. Computer Science"
            value={student.course}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </label>

        <button className="btn-primary" type="submit" disabled={loading}>
          {loading ? <><div className="spinner"></div> Adding…</> : "➕ Add Student"}
        </button>
      </form>

      {message && (
        <p className={`status ${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </section>
  );
}

export default AddStudent;