import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ingredientApiResponse, recipeApiResponse } from "../types/api";
import type FormData from "form-data";

export const ingredientsApi = createApi({
  reducerPath: "ingredientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vision.foodvisor.io/api/1.0/en/",
    prepareHeaders: (headers, { getState }) => {
      const token = process.env.EXPO_PUBLIC_INGREDIENTS_API;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getIngredientsFromImage: builder.mutation<ingredientApiResponse, FormData>({
      query: (body) => ({
        url: `analysis`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetIngredientsFromImageMutation } = ingredientsApi;
