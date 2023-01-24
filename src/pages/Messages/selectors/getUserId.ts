import { RootState } from "src/types/reduxTypes";

export const getUserId = (state: RootState) => state.signIn.userData?.id;
