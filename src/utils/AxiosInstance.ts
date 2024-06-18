import axios from "axios";
import Cookies from "js-cookie";
import { decrypt } from "./Cryptograph";
import { useRouter } from "next/router";

const baseURL = process.env.REACT_APP_API_URL;
const router = useRouter();

const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  async (config) => {
    let token = Cookies.get("token") ? decrypt(Cookies.get("token")) : "";

    // return config;
    config.headers["Authorization"] = "bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

http.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    Cookies.remove("token");
    Cookies.remove("user");
    return router.push("/login");
  } else {
    return Promise.reject(new Error(error));
  }
});

export default http;
