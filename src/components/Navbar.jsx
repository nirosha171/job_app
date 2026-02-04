import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav>
      {!loggedIn ? (
        <>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <>
          <Link to="/jobs">Jobs</Link>
          <Link to="/post-job">Post Job</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/applications">Applications</Link>
          <button type="button" onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
