import React, { useState } from "react";
import { deleteStudent } from "../services/studentService";

function DeleteStudent() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    if (!id) { setMessage("❌ Please enter a student ID"); return; }
    setMessage("");
    setConfirm(true);
  };

  const handleConfirm = async () => {
    setConfirm(false);
    setLoading(true);
    try {
      await deleteStudent(Number(id));
      setMessage("✅ Student deleted successfully.");
      setId("");
    } catch {
      setMessage("❌ Delete failed. Student may not exist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div className="panel-icon icon-delete">🗑️</div>
        <div>
          <h2>Delete Student</h2>
          <p className="panel-desc">Remove a student record permanently by their ID.</p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleRequest}>
        <label className="field">
          <span>Student ID</span>
          <input
            type="number"
            min="1"
            placeholder="Enter student ID to delete"
            value={id}
            onChange={(e) => { setId(e.target.value); setMessage(""); }}
            required
            disabled={loading}
          />
        </label>

        <button className="btn-primary btn-danger" type="submit" disabled={loading}>
          {loading ? <><div className="spinner"></div> Deleting…</> : "🗑️ Delete Student"}
        </button>
      </form>

      {message && (
        <p className={`status ${message.startsWith("✅") ? "success" : "error"}`}>
          {message}
        </p>
      )}

      {/* ── Confirmation Modal ── */}
      {confirm && (
        <div className="modal-overlay" onClick={() => setConfirm(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">⚠️</div>
            <h3>Confirm Deletion</h3>
            <p>
              Are you sure you want to permanently delete student with ID <strong>#{id}</strong>?
              This action <strong>cannot be undone</strong>.
            </p>
            <div className="modal-actions">
              <button
                style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-secondary)", border: "1px solid var(--border-subtle)" }}
                onClick={() => setConfirm(false)}
              >
                Cancel
              </button>
              <button
                style={{ background: "var(--gradient-danger)", color: "#fff", boxShadow: "0 6px 20px rgba(255,95,122,0.35)" }}
                onClick={handleConfirm}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default DeleteStudent;
