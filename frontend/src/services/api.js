import axios from "axios";
import store from "store/store";
import { logout } from "store/authSlice";

const axiosInstance = axios.create();
const url = `${window.location.origin}/api`;

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Accept: "application/json",
      ...config.headers,
    };
    if (!isAbsoluteURLRegex.test(config.url)) {
      config.url = url + config.url;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling auth errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logout());
      return Promise.reject();
    }
    if (error.response && error.response.status === 400) {
      const errorMessage = error.response.data?.message || "An error occurred";
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
