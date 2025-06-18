import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Get All Data
export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://famous-pointed-trip.glitch.me/products" }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `${name}`
    })
  })
});
// Get one Product only
export const { useGetProductsByNameQuery } = productApi;
