import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/api/jobs")
      .then(res => setJobs(res.data))
      .catch(err => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px", color: "#0c1d37" }}>
        Available Internships
      </h2>

      {jobs.length === 0 ? (
        <p>No internships found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {jobs.map(job => (
            <div
              key={job.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
              }}
            >
              <h3 style={{ color: "#1d3557", marginBottom: "10px" }}>
                {job.title}
              </h3>
              <p style={{ color: "#333" }}>{job.description}</p>
              <p style={{ color: "#555", fontStyle: "italic" }}>
                📍 {job.location}
              </p>
              <p style={{ color: "#2a9d8f", fontWeight: "bold" }}>
                💰 {job.salary} INR / month
              </p>

              <button
                onClick={() => navigate(`/apply/${job.id}`)}
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
