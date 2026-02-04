import { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <Card key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p><b>Location:</b> {job.location}</p>
          <p><b>Salary:</b> ₹{job.salary}</p>
        </Card>
      ))}
    </>
  );
}
