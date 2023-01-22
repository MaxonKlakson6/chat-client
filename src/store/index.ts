import { configureStore } from "@reduxjs/toolkit";

import signInReducer from "src/pages/SignIn/reducer";
const store = configureStore({
  reducer: {
    signIn: signInReducer,
  },
});

export { store };
