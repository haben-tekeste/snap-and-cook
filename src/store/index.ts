import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TStackTypes } from "../types/navigation";
import { ingredientsApi } from "../services/ingredients";

import theme from "./slices/theme";

const reducers = combineReducers({
  theme,
  [ingredientsApi.reducerPath]: ingredientsApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, }).concat(
      ingredientsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppNavigation = () => useNavigation<TStackTypes>();
