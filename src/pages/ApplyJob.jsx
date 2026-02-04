import { useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function ApplyJob() {
  const [app, setApp] = useState({});

  const apply = async () => {
    const res = await api.post("/apply", app);
    alert(res.data);
  };

  return (
    <Card>
      <h2>Apply Job</h2>
      <input placeholder="Application ID" onChange={e => setApp({ ...app, applicationId: e.target.value })} />
      <input placeholder="Student ID" onChange={e => setApp({ ...app, studentId: e.target.value })} />
      <input placeholder="Job ID" onChange={e => setApp({ ...app, jobId: e.target.value })} />
      <input placeholder="Message" onChange={e => setApp({ ...app, message: e.target.value })} />
      <button onClick={apply}>Apply</button>
    </Card>
  );
}
