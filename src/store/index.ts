import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import theme from "./slices/theme";
import { ingredientsApi } from "../services/ingredients";
import { recipesApi } from "../services/recipes";
import { TStackTypes } from "../types/navigation";

const reducers = combineReducers({
  theme,
  [ingredientsApi.reducerPath]: ingredientsApi.reducer,
  [recipesApi.reducerPath]: recipesApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      ingredientsApi.middleware,
      recipesApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppNavigation = () => useNavigation<TStackTypes>();
