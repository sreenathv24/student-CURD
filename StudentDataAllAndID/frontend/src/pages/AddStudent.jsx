import React, { useState } from "react";
import { createStudent } from "../services/studentService";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(student);
      setMessage("✅ Student added successfully");
      setStudent({ name: "", email: "", course: "" });
    } catch {
      setMessage("❌ Error adding student");
    }
  };

  return (
    <section className="panel">

      <h2>Add Student</h2>
      <form className="student-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Name</span>
          <input
            name="name"
            placeholder="Enter full name"
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
            placeholder="student@email.com"
            value={student.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="field">
          <span>Course</span>
          <input
            name="course"
            placeholder="Course name"
            value={student.course}
            onChange={handleChange}
            required
          />
        </label>

        <button className="btn-primary" type="submit">Add Student</button>
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