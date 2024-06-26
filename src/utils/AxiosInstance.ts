import axios from "axios";
import Cookies from "js-cookie";
import { decrypt } from "./Cryptograph";

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

// http.interceptors.response.use(undefined, async (error) => {
//   const originalRequest = error.config;
//   console.log(error);

//   if (error.response.status === 401 && !originalRequest._retry) {
//     Cookies.remove("token");
//     Cookies.remove("user");
//   } else {
//     return Promise.reject(new Error(error));
//   }
// });

export default http;
