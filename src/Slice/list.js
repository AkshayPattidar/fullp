import { createSlice } from "@reduxjs/toolkit";
export let status =Object.freeze({
  idel: "idel",
  loading: "loading",
  error: "error",
});

const List = createSlice({
  name: "List",
  initialState: {
    some: [],
    status: status.idel,
  },
  reducers: {
    setlist: (state, action) => {
      state.some = action.payload;
    },
    setstatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export let { setlist, setstatus } = List.actions;
export default List.reducer;

export function as() {
  return async function yThunk(dispatch) {
    dispatch(setstatus(status.loading));
    try {
      let th = await fetch("https://fakestoreapi.com/products");
      let next = await th.json();
      dispatch(setlist(next));
      dispatch(setstatus(status.idel));
    } catch {
      dispatch(setstatus(status.error));
    }
  };
}
