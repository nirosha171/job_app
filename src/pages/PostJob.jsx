import { useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function PostJob() {
  const [job, setJob] = useState({});

  const postJob = async () => {
    const res = await api.post("/jobs", job);
    alert(res.data);
  };

  return (
    <Card>
      <h2>Post Job</h2>
      <input placeholder="Job ID" onChange={e => setJob({ ...job, id: e.target.value })} />
      <input placeholder="Company ID" onChange={e => setJob({ ...job, companyId: e.target.value })} />
      <input placeholder="Title" onChange={e => setJob({ ...job, title: e.target.value })} />
      <input placeholder="Description" onChange={e => setJob({ ...job, description: e.target.value })} />
      <input placeholder="Location" onChange={e => setJob({ ...job, location: e.target.value })} />
      <input placeholder="Salary" onChange={e => setJob({ ...job, salary: e.target.value })} />
      <button onClick={postJob}>Post Job</button>
    </Card>
  );
}
