import React, { useState, useEffect, useCallback } from "react";
import { getAllStudents } from "../services/studentService";

function AllStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchAll = useCallback(async () => {
        setLoading(true);
        setError("");
        try {
            const data = await getAllStudents();
            setStudents(data);
        } catch {
            setError("⚠️ Failed to load students. Please check the server connection.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchAll(); }, [fetchAll]);

    const getInitials = (name = "") =>
        name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase() || "?";

    return (
        <section className="panel">
            <div className="panel-header">
                <div className="panel-icon icon-list">📋</div>
                <div>
                    <h2>All Students</h2>
                    <p className="panel-desc">Complete list of registered students in the system.</p>
                </div>
            </div>

            {loading && (
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "32px 0", color: "var(--text-secondary)" }}>
                    <div className="spinner" style={{ borderTopColor: "var(--accent-blue)", width: 24, height: 24 }}></div>
                    <span>Loading students…</span>
                </div>
            )}

            {error && !loading && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <p className="status error">{error}</p>
                    <button className="btn-primary btn-secondary" style={{ maxWidth: 160 }} onClick={fetchAll}>
                        🔄 Retry
                    </button>
                </div>
            )}

            {!loading && !error && (
                <>
                    <div className="table-meta">
                        <span className="table-count">
                            <strong>{students.length}</strong> {students.length === 1 ? "student" : "students"} found
                        </span>
                        <button
                            className="btn-primary"
                            style={{ padding: "8px 16px", fontSize: "0.84rem", marginTop: 0 }}
                            onClick={fetchAll}
                        >
                            🔄 Refresh
                        </button>
                    </div>

                    {students.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">🎓</div>
                            <p>No students found</p>
                            <span>Use the Add tab to create your first student record.</span>
                        </div>
                    ) : (
                        <div className="students-table-wrapper">
                            <table className="students-table">
                                <thead>
                                    <tr>
                                        <th className="td-id">#ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.map((s) => (
                                        <tr key={s.id}>
                                            <td className="td-id">{s.id}</td>
                                            <td className="td-name">
                                                <span
                                                    className="table-avatar"
                                                    style={{
                                                        background: `hsl(${(s.id * 47) % 360}, 65%, 50%)`,
                                                    }}
                                                >
                                                    {getInitials(s.name)}
                                                </span>
                                                {s.name}
                                            </td>
                                            <td className="td-email">{s.email}</td>
                                            <td>
                                                <span className="course-badge">{s.course}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}

export default AllStudents;
