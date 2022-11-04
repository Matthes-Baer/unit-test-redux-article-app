import { configureStore } from "@reduxjs/toolkit";
import { ListSlice } from "../features/ListSlice";

const store = configureStore({
  reducer: {
    listReducers: ListSlice.reducer,
  },
});

export default store;
