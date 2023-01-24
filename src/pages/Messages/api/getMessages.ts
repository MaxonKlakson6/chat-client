import api from "src/api";

export const getMessages = (id: number) => api.get(`/message?id=${id}`);
