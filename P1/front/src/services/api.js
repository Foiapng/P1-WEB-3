import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800", // porta correta do backend
});

export default api;
