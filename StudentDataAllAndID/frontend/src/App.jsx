import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddStudent from "./pages/AddStudent";
import GetStudentId from "./pages/GetStudentId";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";
import NavigationButtons from "./components/NavigationButtons";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <main className="app-shell">
        <header className="app-header">
          <h1>Student Management</h1>
          <p>Organize student records with a modern, responsive workflow.</p>
        </header>

        <NavigationButtons />

        <section className="page-content">
          <Routes>
            <Route path="/" element={<GetStudentId />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/update" element={<UpdateStudent />} />
            <Route path="/delete" element={<DeleteStudent />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;