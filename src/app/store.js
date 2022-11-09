import { configureStore } from "@reduxjs/toolkit";
import { ListSlice } from "../features/ListSlice"; // Import the slice that should be added to the store.

const store = configureStore({
  reducer: {
    listReducers: ListSlice.reducer, // Be careful with upper and lower case for the first character of the key (upper case can cause problems).
  },
});

export default store;
