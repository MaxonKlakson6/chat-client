import { DatabaseFields } from "src/types/databaseFields";

export interface Message extends DatabaseFields {
  id: number;
  theme: string;
  text: string;
  senderName: string;
  isRead: boolean;
  UserId: number;
}
