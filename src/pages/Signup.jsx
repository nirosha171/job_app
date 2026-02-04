import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const signup = async () => {
    try {
      const res = await api.post("/api/users/signup", user);
      alert(res.data);
    } catch (err) {
      console.error(err);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #bbdefb, #e3f2fd, #90caf9)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px 50px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            color: "#0d47a1",
            fontWeight: "700",
            fontSize: "28px",
          }}
        >
          Signup
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          style={inputStyle}
        />

        <select
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          style={{
            ...inputStyle,
            cursor: "pointer",
            backgroundColor: "#f9f9f9",
          }}
        >
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>

        <button
          onClick={signup}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            marginTop: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0d47a1")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#1976d2")}
        >
          Create Account
        </button>

        <p
          style={{
            marginTop: "20px",
            color: "#333",
            fontSize: "14px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/"
            style={{
              color: "#1565c0",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "15px",
  backgroundColor: "#f9f9f9",
  transition: "border-color 0.2s ease",
};
