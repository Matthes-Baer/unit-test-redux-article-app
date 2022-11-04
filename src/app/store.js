import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "../features/listSlice";

const store = configureStore({
  reducer: {
    listReducers: listSlice.reducer,
  },
});

export default store;
