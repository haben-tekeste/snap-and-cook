import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  recipeApiResponse,
  recipeInfoResponse,
  recipeInstructionResponse,
} from "../types/api";

export const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.spoonacular.com/`,
  }),
  endpoints: (builder) => ({
    getRecipesByIngredients: builder.query<recipeApiResponse, string>({
      query: (ingredients) => ({
        url: `recipes/findByIngredients?ingredients=${ingredients}&apiKey=${process.env.EXPO_PUBLIC_RECIPES_API}`,
        method: "GET",
      }),
    }),
    getRecipeInfo: builder.query<recipeInfoResponse, number>({
      query: (recipeId) => ({
        url: `recipes/${recipeId}/information?includeNutrition=true&apiKey=${process.env.EXPO_PUBLIC_RECIPES_API}`,
        method: "GET",
      }),
    }),
    getRecipeInstructions: builder.query<recipeInstructionResponse, number>({
      query: (recipeId) => ({
        url: `recipes/${recipeId}/analyzedInstructions?apiKey=${process.env.EXPO_PUBLIC_RECIPES_API}`,
      }),
    }),
  }),
});

export const {
  useGetRecipesByIngredientsQuery,
  useGetRecipeInfoQuery,
  useGetRecipeInstructionsQuery,
} = recipesApi;
