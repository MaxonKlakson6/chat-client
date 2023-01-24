import { createSlice } from "@reduxjs/toolkit";

import { authorization } from "src/pages/SignIn/thunks/authorization";
import type { User } from "src/types/user";
import type { ApiError } from "src/types/apiError";

interface SignInInitialState {
  userData: User | null;
  error: ApiError;
  isLoading: boolean;
}

const initialState: SignInInitialState = {
  userData: null,
  error: null,
  isLoading: false,
};

const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authorization.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authorization.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userData = payload;
    });
    builder.addCase(authorization.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { cleanUp } = signInSlice.actions;

export default signInSlice.reducer;
