import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITheme {
  authType: string;
}

const initialState: ITheme = {
  authType: "sign-in",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleAuthTYpe: (state, action) => {
      state.authType = action.payload;
    },
  },
});

export const { toggleAuthTYpe } = themeSlice.actions;
export default themeSlice.reducer;
