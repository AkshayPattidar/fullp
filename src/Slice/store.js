import { configureStore } from "@reduxjs/toolkit";
import reduce from "./Creat";
import lists from "./list.js";
const confi = configureStore({
  reducer: {
    cart: reduce,
    list: lists,
  },
});
export default confi;
