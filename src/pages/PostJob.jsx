import { useState } from "react";
import Card from "../components/Card";
import api from "../api/api";

export default function PostJob() {
  const [job, setJob] = useState({});

  const postJob = async () => {
    try {
      const res = await api.post("/api/jobs", job); // ✅ corrected path
      alert(res.data);
    } catch (err) {
      console.error(err);
      alert("Error posting job");
    }
  };

  return (
    <Card>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Post a Job
      </h2>

      <input
        placeholder="Job ID"
        onChange={e => setJob({ ...job, id: e.target.value })}
      />
      <input
        placeholder="Company ID"
        onChange={e => setJob({ ...job, companyId: e.target.value })}
      />
      <input
        placeholder="Job Title"
        onChange={e => setJob({ ...job, title: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={e => setJob({ ...job, description: e.target.value })}
      />
      <input
        placeholder="Location"
        onChange={e => setJob({ ...job, location: e.target.value })}
      />
      <input
        placeholder="Salary"
        onChange={e => setJob({ ...job, salary: e.target.value })}
      />

      <button onClick={postJob} style={{ width: "100%", marginTop: "10px" }}>
        Post Job
      </button>
    </Card>
  );
}
