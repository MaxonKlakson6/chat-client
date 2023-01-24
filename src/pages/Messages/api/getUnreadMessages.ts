import api from "src/api";

export const getUnreadMessages = (id: number) =>
  api.get(`/message/unread?id=${id}`);
