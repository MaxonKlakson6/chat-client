import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import { getMessages } from "src/pages/Messages/api/getMessages";

import type { Message } from "src/pages/Messages/types/message";
import type { ApiError } from "src/types/apiError";

export const receiveMessages = createAsyncThunk<
  Message[],
  number,
  { rejectValue: ApiError }
>("messages/receiveMessages", async (id, { rejectWithValue }) => {
  try {
    const messages = await getMessages(id);

    return messages.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    return rejectWithValue(axiosError.response?.data);
  }
});
