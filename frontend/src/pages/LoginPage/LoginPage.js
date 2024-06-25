import "./LoginPage.css";
import authService from "services/authService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) navigate("/");

  async function handleSubmit(e) {
    setError("");
    e.preventDefault();
    const { username, password } = Object.fromEntries(new FormData(e.target));
    authService.login(username, password).catch((err) => {
      setError(err.message);
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="login-page form-signin needs-validation"
    >
      <h1 className="h3 mb-3">Login</h1>
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        required
        autoFocus
      />
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        required
      ></input>
      <button className="btn btn-dark w-100" type="submit">
        login
      </button>
      {error && (
        <div class="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
