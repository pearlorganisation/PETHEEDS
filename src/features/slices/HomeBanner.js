import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { createHomebanner } from "../actions/HomebannerAction";

const initialState = {
  isLoading: false,
  isSuccess: false,
  homebannerdata: [],
  errorMessage: "",
};

export const homebanner = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createHomebanner.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createHomebanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.productsData = action.payload.data;
      })
      .addCase(createHomebanner.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = homebanner.actions;
export default homebanner.reducer;
