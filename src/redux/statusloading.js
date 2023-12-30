import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingStatus: false,
};

export const Loadedpage = createSlice({
  name: "Loadedpage",
  initialState: initialState,
  reducers: {
    setopen: (state) => {
      state.loadingStatus = true
    },
    setclose: (state) => {
      state.loadingStatus = false
    }
  },
});
export const { setopen, setclose } = Loadedpage.actions;

export default Loadedpage.reducer;
