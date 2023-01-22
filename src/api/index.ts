import axios from "axios";

const api = axios.create({
  baseURL: "https://chat-yasa.onrender.com",
});

export default api;
