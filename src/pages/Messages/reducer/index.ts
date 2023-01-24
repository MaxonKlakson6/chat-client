import { createSlice } from "@reduxjs/toolkit";

import { receiveMessages } from "src/pages/Messages/thunks/receiveMessages";
import { receiveUsers } from "src/pages/Messages/thunks/receiveUsers";
import { sendMessage } from "src/pages/Messages/thunks/sendMessage";
import { receiveUnreadMessages } from "src/pages/Messages/thunks/receiveUnreadMessages";

import type { User } from "src/types/user";
import type { Message } from "src/pages/Messages/types/message";
import type { ApiError } from "src/types/apiError";

interface MessagesInitialState {
  users: User[];
  messages: Message[];
  successMessage: string;
  error: ApiError;
  isLoading: boolean;
}

const initialState: MessagesInitialState = {
  users: [],
  messages: [],
  successMessage: "",
  error: null,
  isLoading: false,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    cleanUp: (state) => {
      state.error = null;
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(receiveMessages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(receiveMessages.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.messages = payload.reverse();
    });
    builder.addCase(receiveMessages.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(receiveUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(receiveUsers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.users = payload;
    });
    builder.addCase(receiveUsers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(sendMessage.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.successMessage = payload;
    });
    builder.addCase(sendMessage.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(receiveUnreadMessages.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { cleanUp } = messagesSlice.actions;

export default messagesSlice.reducer;
