import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/slices/theme";
import chatSlice from "./features/slices/chat"
import { apiSlice } from "@/lib/features/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
      chat: chatSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware), // Add the middleware for RTK Query
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
