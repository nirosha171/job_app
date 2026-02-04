import { useState } from "react";
import api from "../api/api";
import Card from "../components/Card";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: ""
  });

  const signup = async () => {
    try {
      const res = await api.post("/signup", user);
      alert(res.data);
    } catch (err) {
      if (err.response) {
        alert(err.response.data);
      } else {
        alert("Server not reachable");
      }
    }
  };

  return (
    <Card>
      <h2>Create Account</h2>

      <input
        placeholder="Email"
        onChange={e => setUser({ ...user, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setUser({ ...user, password: e.target.value })}
      />

      <select
        onChange={e => setUser({ ...user, role: e.target.value })}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="company">Company</option>
      </select>

      <button type="button" onClick={signup}>Register</button>
    </Card>
  );
}
