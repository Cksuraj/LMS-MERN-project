import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Authslice from "./Slices/Authslices";

const Store = configureStore({
  reducer: {
    auth: Authslice, // Assuming Authslice is a reducer
  },
  devTools: true,
});

export default Store;
