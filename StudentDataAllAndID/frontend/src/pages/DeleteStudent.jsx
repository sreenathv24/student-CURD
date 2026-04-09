import React, { useState } from "react";
import { deleteStudent } from "../services/studentService";
import NavigationButtons from "../components/NavigationButtons";

function DeleteStudent() {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      await deleteStudent(Number(id));
      alert("✅ Deleted successfully");
    } catch (err) {
      alert("❌ Delete failed");
    }
  };

  return (
    <div>
      <NavigationButtons />

      <h2>Delete Student</h2>

      <input
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteStudent;