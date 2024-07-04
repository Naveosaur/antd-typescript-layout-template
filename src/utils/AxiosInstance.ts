import axios from "axios";
import Cookies from "js-cookie";
import { decrypt } from "./Cryptograph";
import { removeLocalStorage } from "./UseLocalStorage";
import { get } from "http";

// To DO: Change the baseURL with your API URL from environment variable
const baseURL = "https://klinik.4netps.co.id/hospital-endpoint/";

const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    let token = Cookies.get("token");
    // let token = getLocalStorage("token");
    if (token) {
      const decryptedToken = decrypt(token);
      config.headers["Authorization"] = "Bearer " + decryptedToken;
      return config;
    }

    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

http.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;

  if (error.response === 401 && !originalRequest._retry) {
    Cookies.remove("token");
    Cookies.remove("user");
    removeLocalStorage("user");
    removeLocalStorage("token");
  } else {
    return Promise.reject(new Error(error));
  }
});

export default http;
