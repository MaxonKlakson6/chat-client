import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

import type { ApiError } from "src/types/apiError";
import { SendMessageRequest } from "src/pages/Messages/types/sendMessageRequest";
import { sendMessage as sendMessageToUser } from "src/pages/Messages/api/sendMessage";

export const sendMessage = createAsyncThunk<
  string,
  SendMessageRequest,
  { rejectValue: ApiError }
>("messages/sendMessage", async (requestBody, { rejectWithValue }) => {
  try {
    const response = await sendMessageToUser(requestBody);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    return rejectWithValue(axiosError.response?.data);
  }
});
