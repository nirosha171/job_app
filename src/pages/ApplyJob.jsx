import { useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function ApplyJob() {

  const [app, setApp] = useState({
    studentId: 0,
    jobId: 0,
    message: ""
  });

  const apply = async () => {
  try {
    const payload = {
      studentId: Number(app.studentId),
      jobId: Number(app.jobId),
      message: app.message
    };

    const res = await api.post("/applications/apply", payload);

    alert(res.data); // SUCCESS

  } catch (err) {
    console.log(err.response);
    alert("Apply failed");
  }
};


  return (
    <Card>
      <h2>Apply Job</h2>

      <input
        type="number"
        placeholder="Student ID"
        value={app.studentId}
        onChange={e =>
          setApp({ ...app, studentId: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Job ID"
        value={app.jobId}
        onChange={e =>
          setApp({ ...app, jobId: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Message"
        value={app.message}
        onChange={e =>
          setApp({ ...app, message: e.target.value })
        }
      />

      <button type="button" onClick={apply}>
        Apply
      </button>
    </Card>
  );
}
