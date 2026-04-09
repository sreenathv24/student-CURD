import React, { useState } from "react";
import { createStudent } from "../services/studentService";
import NavigationButtons from "../components/NavigationButtons";

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
    } catch {
      setMessage("❌ Error adding student");
    }
  };

  return (
    <div>
      <NavigationButtons />

      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="course" placeholder="Course" onChange={handleChange} />

        <button type="submit">Add</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default AddStudent;