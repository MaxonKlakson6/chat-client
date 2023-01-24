import { User } from "src/types/user";
import { DatabaseFields } from "src/types/databaseFields";

export interface UserResponse extends User, DatabaseFields {}
