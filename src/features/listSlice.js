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
  name: "listReducers", // Be careful with upper and lower case for the first character of the value (upper case can cause problems).
  initialState,
  reducers: {
    // This reducer is capable of adding another element to the current state array.
    testAddReducer: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { testAddReducer } = ListSlice.actions;
export default ListSlice.reducer;
