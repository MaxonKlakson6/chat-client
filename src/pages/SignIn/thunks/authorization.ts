import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { signIn } from "src/pages/SignIn/api/signIn";
import { serializeResponse } from "src/helpers/serializeResponse";
import type { User } from "src/types/user";
import type { UserResponse } from "src/types/userResponse";
import type { ApiError } from "src/types/apiError";

export const authorization = createAsyncThunk<
  User,
  string,
  { rejectValue: ApiError }
>("signIn/authorization", async (name, { rejectWithValue }) => {
  try {
    const createdUser = await signIn(name);

    return serializeResponse<UserResponse>(createdUser.data);
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;

    return rejectWithValue(axiosError.response?.data);
  }
});
