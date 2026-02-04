import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/api";

export default function Apply() {
  const { id: jobId } = useParams();
  const navigate = useNavigate();

  const [application, setApplication] = useState({
    jobId: jobId,
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    message: ""
  });

  const [resumeFile, setResumeFile] = useState(null);

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert("Please upload your resume (PDF or DOC).");
      return;
    }

    const formData = new FormData();
    formData.append("application", new Blob([JSON.stringify(application)], { type: "application/json" }));
    formData.append("resumeFile", resumeFile);

    try {
      await api.post("/api/applications", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Applied successfully!");
      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert("Application failed. Try again.");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px", color: "#0c1d37" }}>
        Apply for Internship
      </h2>

      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" name="fullName" placeholder="Full Name" value={application.fullName} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={application.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={application.phone} onChange={handleChange} required />
        <input type="text" name="college" placeholder="College Name" value={application.college} onChange={handleChange} required />
        <input type="text" name="degree" placeholder="Degree / Major" value={application.degree} onChange={handleChange} required />
        <textarea name="message" placeholder="Why should we select you?" rows="4" value={application.message} onChange={handleChange} required />

        <label style={{ fontWeight: "bold", marginTop: "10px" }}>Upload Resume (PDF or DOC):</label>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
