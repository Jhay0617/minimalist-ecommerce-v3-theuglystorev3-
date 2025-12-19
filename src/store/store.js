import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sessionStorage from "redux-persist/lib/storage/session";
import {
  persistReducer,
  REHYDRATE,
  PERSIST,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE],
      },
    }),
});

export const persistor = persistStore(store);
