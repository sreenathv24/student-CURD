import React, { useState } from "react";
import { updateStudent } from "../services/studentService";

function UpdateStudent() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!id) {
      setMessage("❌ Please enter a student ID");
      return;
    }
    try {
      await updateStudent(Number(id), student);
      setMessage("✅ Student updated successfully");
    } catch {
      setMessage("❌ Update failed");
    }
  };

  return (
    <section className="panel">
      <h2>Update Student</h2>
      <form className="student-form" onSubmit={handleUpdate}>
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

        <label className="field">
          <span>Name</span>
          <input
            name="name"
            placeholder="Updated name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="updated@email.com"
            value={student.email}
            onChange={handleChange}
            required
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
          />
        </label>

        <button className="btn-primary" type="submit">Update Student</button>
      </form>

      {message && (
        <p className={`status ${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}
    </section>
  );
}

export default UpdateStudent;