import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";
import { newsApi } from "./newsApi";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware,
      newsApi.middleware
    ]),
})