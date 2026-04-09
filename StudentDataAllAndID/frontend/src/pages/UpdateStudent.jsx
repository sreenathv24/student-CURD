import React, { useState } from "react";
import { updateStudent } from "../services/studentService";
import NavigationButtons from "../components/NavigationButtons";

function UpdateStudent() {
  const [id, setId] = useState("");
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await updateStudent(Number(id), student);
      alert("✅ Updated successfully");
    } catch {
      alert("❌ Update failed");
    }
  };

  return (
    <div>
      <h2>Update Student</h2>

      <input
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        name="course"
        placeholder="Course"
        value={student.course}
        onChange={handleChange}
      />

      <button onClick={handleUpdate}>Update</button>

      <NavigationButtons />
    </div>
  );
}

export default UpdateStudent;