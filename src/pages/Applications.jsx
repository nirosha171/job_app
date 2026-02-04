import { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get("/applications");
        setApps(res.data);
      } catch (err) {
        console.error("Failed to fetch applications:", err);
      }
    };
    fetchApplications();
  }, []);

  return (
    <>
      <h2>Job Applications</h2>
      {apps.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        apps.map((a) => (
          <Card key={a.applicationId || a.id}>
            <p>
              <b>Student ID:</b> {a.studentId}
            </p>
            <p>
              <b>Job ID:</b> {a.jobId}
            </p>
            <p>
              <b>Status:</b> {a.status}
            </p>
          </Card>
        ))
      )}
    </>
  );
}
