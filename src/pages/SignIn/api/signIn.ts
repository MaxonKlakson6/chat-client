import api from "src/api";

export const signIn = (name: string) => api.post("/user/signIn", { name });
