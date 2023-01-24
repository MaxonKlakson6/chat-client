import api from "src/api";

export const getUsers = () => api.get("/user");
