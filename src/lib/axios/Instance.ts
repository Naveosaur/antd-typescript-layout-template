import { getLocalStorage, removeLocalStorage } from "@/utils/UseLocalStorage";
import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_CORE_URL;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = getLocalStorage("token");

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      removeLocalStorage("token");

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default instance;
