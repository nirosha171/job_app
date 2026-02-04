import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import Card from "../components/Card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await api.post("/login", { email, password });

      if (res.data === "Login successful") {
        localStorage.setItem("loggedIn", "true");
        navigate("/jobs");
      } else {
        setMsg(res.data);
      }
    } catch {
      setMsg("Server not reachable");
    }
  };

  return (
    <Card>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="button" onClick={login}>Login</button>
      <p>{msg}</p>
    </Card>
  );
}
