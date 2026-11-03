import axios from "axios";

const api = axios.create({
  baseURL: `/api/v1`,
  timeout: 5000,
});

// interceptor -> satpam -> orang keluar dan orang masuk
// interceptor -> request dan response
// request
api.interceptors.request.use((config) => {
  // Required when the Java API is exposed through an ngrok free-domain tunnel.
  config.headers["ngrok-skip-browser-warning"] = "true";

  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
