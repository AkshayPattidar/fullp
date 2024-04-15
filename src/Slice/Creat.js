import { createSlice } from "@reduxjs/toolkit";

const Csl = createSlice({
  name: "cart",
  initialState:[],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    cles: (state, action) => {
      return state.filter((ca) => ca.id !== action.payload);
    },
  },
});

export let { add, cles } = Csl.actions;
export default Csl.reducer;
