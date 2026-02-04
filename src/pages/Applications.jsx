import { useEffect, useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function Applications() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    api.get("/applications").then(res => setApps(res.data));
  }, []);

  return (
    <>
      <h2>Applications</h2>
      {apps.map((a, i) => (
        <Card key={i}>
          <p>Student: {a.studentId}</p>
          <p>Status: {a.status || "Pending"}</p>
        </Card>
      ))}
    </>
  );
}
