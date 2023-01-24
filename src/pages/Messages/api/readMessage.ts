import api from "src/api";

export const readMessage = (id: number) => api.patch(`message?id=${id}`);
