import axiosInstance from "./api";
import store from "store/store";
import { login, logout } from "store/authSlice";

class authService {
  login = async (username, password) => {
    const response = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    store.dispatch(login());
  };

  logout = async () => {
    const response = await axiosInstance.post("/auth/logout");
    store.dispatch(logout());
  };

  checkAuth = async () => {
    try {
      const response = await axiosInstance.get("/auth/check");
      store.dispatch(login());
    } catch (err) {
      store.dispatch(logout());
    }
  };
}

export default new authService();
