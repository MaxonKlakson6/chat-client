import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError, AxiosResponse } from "axios";

import { getUsers } from "src/pages/Messages/api/getUsers";
import type { ApiError } from "src/types/apiError";
import type { User } from "src/types/user";
import { UserResponse } from "src/types/userResponse";
import { serializeResponse } from "src/helpers/serializeResponse";

export const receiveUsers = createAsyncThunk<
  User[],
  undefined,
  { rejectValue: ApiError }
>("messages/receiveUsers", async (_, { rejectWithValue }) => {
  try {
    const users: AxiosResponse<UserResponse[]> = await getUsers();

    return users.data.map((user) => serializeResponse(user));
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    return rejectWithValue(axiosError.response?.data);
  }
});
