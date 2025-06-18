import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "./productsApi.js";
import cartReducer from "./cartSlice.js";
export const store = configureStore({
  reducer: {
    cartt: cartReducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch);
