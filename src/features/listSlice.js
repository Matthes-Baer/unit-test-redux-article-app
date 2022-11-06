import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: [
    {
      id: `${new Date().getSeconds()}`,
      description: "This is something",
      significance: 7,
    },
  ],
};

export const ListSlice = createSlice({
  name: "listReducers",
  initialState,
  reducers: {
    testAddReducer: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { testAddReducer } = ListSlice.actions;
export default ListSlice.reducer;
