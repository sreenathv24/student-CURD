import React, { useState } from "react";
import { deleteStudent } from "../services/studentService";

function DeleteStudent() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!id) {
      setMessage("❌ Please enter a student ID");
      return;
    }

    try {
      await deleteStudent(Number(id));
      setMessage("✅ Student deleted successfully");
      setId("");
    } catch {
      setMessage("❌ Delete failed");
    }
  };

  return (
    <section className="panel">
      <h2>Delete Student</h2>

      <form className="student-form" onSubmit={handleDelete}>
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

        <button className="btn-primary" type="submit">Delete Student</button>
      </form>

      {message && (
        <p className={`status ${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </section>
  );
}

export default DeleteStudent;
