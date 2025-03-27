import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITheme {
  isDark: boolean;
}

// Ensure localStorage access only on the client-side
const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("theme") || "true");
  }
  return true;
};

const initialState: ITheme = {
  isDark: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", JSON.stringify(state.isDark));
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
