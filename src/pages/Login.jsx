import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await api.post("/api/users/login", { email, password });
      if (res.data === "Login successful") {
        localStorage.setItem("loggedIn", "true");
        navigate("/jobs");
      } else {
        alert(res.data);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Check server or credentials.");
    }
  };

  return (
    <div className="page-container">
      {/* Website Title */}
      <h1
        style={{
          color: "#0d47a1",
          fontWeight: "800",
          fontSize: "30px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        Internship Apply Website
      </h1>

      {/* Login Heading */}
      <h2 style={{ marginBottom: "20px" }}>Login</h2>

      {/* Form Fields */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        New user?{" "}
        <Link
          to="/signup"
          style={{
            color: "#1565c0",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Signup
        </Link>
      </p>
    </div>
  );
}
