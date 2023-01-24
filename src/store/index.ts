import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { REHYDRATE, PERSIST } from "redux-persist/es/constants";

import signInReducer from "src/pages/SignIn/reducer";
import messagesReducer from "src/pages/Messages/reducer";
import { signInPersistConfig } from "src/store/persistConfig";

const rootReducer = combineReducers({
  signIn: persistReducer(signInPersistConfig, signInReducer),
  messages: messagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
