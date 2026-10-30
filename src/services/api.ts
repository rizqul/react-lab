import axios from "axios";
import { BASE_URL } from "../utils/contants/contants-api";
import { config } from "zod";

const api = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  timeout: 5000,
});

// interceptor -> satpam -> orang keluar dan orang masuk
// interceptor -> request dan response
// request
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["ngrok-skip-browser-warning"] = "true";
  }
  return config;
});

// response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API error : ", error);
    return Promise.reject(error);
  },
);

export default api;
