import { SendMessageRequest } from "src/pages/Messages/types/sendMessageRequest";
import api from "src/api";

export const sendMessage = (requestBody: SendMessageRequest) =>
  api.post("/message", requestBody);
