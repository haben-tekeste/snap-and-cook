export type CustomTheme = {
  colors: {
    primary: string;
    secondary: string;
    mainBackgroundColor: string;
    mainTextColor: string;
    success: string;
    warning: string;
    error: string;
  };
};

export type ThemeState = {
  theme: CustomTheme;
  darkMode: boolean | null;
};

export type ThemePayload = {
  payload: Partial<ThemeState>;
};
