import "./LoginPage.css";
import authService from "services/authService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Login() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) navigate("/");

  async function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = Object.fromEntries(new FormData(e.target));
    await authService.login(username, password);
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
        Login
      </button>
    </form>
  );
}
