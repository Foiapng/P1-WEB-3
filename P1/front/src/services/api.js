import axios from "axios";

const api = axios.create({
  baseURL: "https://web-3-z2aw.onrender.com", // porta correta do backend
});

export default api;
