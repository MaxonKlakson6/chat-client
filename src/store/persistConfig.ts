import storage from "redux-persist/lib/storage";

export const signInPersistConfig = {
  key: "signIn",
  storage,
  whitelist: ["userData"],
};
