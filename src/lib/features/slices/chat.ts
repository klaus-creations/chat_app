import { createSlice, } from "@reduxjs/toolkit";

interface IChat {
  active: string | null;
}



const initialState: IChat = {
  active: null,
};

const chatSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleChat: (state, action) => {
      state.active = action.payload
    }
  },
});

export const { toggleChat } = chatSlice.actions;
export default chatSlice.reducer;
