import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUnreadMessages } from "src/pages/Messages/api/getUnreadMessages";
import { receiveMessages } from "src/pages/Messages/thunks/receiveMessages";

import type { Message } from "src/pages/Messages/types/message";
import type { ApiError } from "src/types/apiError";
import type { AxiosError } from "axios";
import { readMessage } from "src/pages/Messages/api/readMessage";
import { toast } from "react-toastify";

export const receiveUnreadMessages = createAsyncThunk<
  undefined,
  number,
  { rejectValue: ApiError }
>(
  "messages/receiveUnreadMessages",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const unreadMessages = await getUnreadMessages(id);

      if (unreadMessages.data.length) {
        await readMessage(id);
        dispatch(receiveMessages(id));
        unreadMessages.data.forEach((message: Message) => {
          toast(`${message.senderName}: ${message.text}`);
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiError>;
      return rejectWithValue(axiosError.response?.data);
    }
  }
);
