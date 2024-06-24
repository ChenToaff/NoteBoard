import axiosInstance from "./api";

class authService {
  login = async (username, password) => {
    const response = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
  };

  logout = async () => {
    const response = await axiosInstance.post("/auth/logout");
  };
}

export default new authService();
