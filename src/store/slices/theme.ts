import { createSlice } from "@reduxjs/toolkit";
import { ThemeState } from "../../types/theme";
import { defaultTheme } from "../../../constants/theme";

//
const initialState: ThemeState = {
  theme: defaultTheme,
  darkMode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== "undefined") state.theme = theme;
      if (typeof darkMode !== "undefined") state.darkMode = darkMode;
    },
    setDefaultTheme: (state, { payload: { theme, darkMode } }) => {
      if (!state.theme) {
        if (typeof theme !== "undefined") {
          state.theme = theme;
        }
        if (typeof darkMode !== "undefined") {
          state.darkMode = darkMode;
        }
      }
    },
  },
});

export const { changeTheme, setDefaultTheme } = themeSlice.actions;
export default themeSlice.reducer;
