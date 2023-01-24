import { RootState } from "src/types/reduxTypes";

export const getUsersList = (state: RootState) => state.messages.users;
