import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: `${new Date().getSeconds()}`,
      description: "This is something",
      significance: 7,
    },
  ],
};

export const listSlice = createSlice({
  name: "listReducers",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value += 1;
    },
  },
});

export const { addItem } = listSlice.actions;
export default listSlice.reducer;
