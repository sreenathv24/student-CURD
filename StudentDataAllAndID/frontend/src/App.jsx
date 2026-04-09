import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddStudent from "./pages/AddStudent";
import GetStudentId from "./pages/GetStudentId";
import UpdateStudent from "./pages/UpdateStudent";
import DeleteStudent from "./pages/DeleteStudent";
import AllStudents from "./pages/AllStudents";
import NavigationButtons from "./components/NavigationButtons";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        {/* ── Header ── */}
        <header className="app-header">
          <div className="header-inner">
            <div className="header-icon">🎓</div>
            <div className="header-text">
              <h1>Student Management</h1>
              <p className="header-subtitle">
                A modern, full-stack portal to create, view, update and delete student records with ease.
              </p>
              <div className="header-stats">
                <span className="stat-badge">
                  <span className="stat-dot"></span>
                  Live System
                </span>
                <span className="stat-badge">⚡ Spring Boot API</span>
                <span className="stat-badge">🗄️ MySQL Database</span>
                <span className="stat-badge">🔥 Firebase Hosted</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Navigation ── */}
        <nav className="nav-wrapper" aria-label="Main navigation">
          <NavigationButtons />
        </nav>

        {/* ── Page Content ── */}
        <main className="page-content">
          <Routes>
            <Route path="/" element={<AllStudents />} />
            <Route path="/search" element={<GetStudentId />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/update" element={<UpdateStudent />} />
            <Route path="/delete" element={<DeleteStudent />} />
          </Routes>
        </main>

        {/* ── Footer ── */}
        <footer className="app-footer">
          <div className="footer-inner">
            <span className="footer-brand">
              <span>Student Management</span> — Built with ❤️
            </span>
            <div className="footer-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Spring Boot</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">Firebase</span>
              <span className="tech-tag">Render</span>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;