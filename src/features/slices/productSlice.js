// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getProducts } from "../actions/productActions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  productsData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.productsData = action.payload.data;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = productsSlice.actions;
export default productsSlice.reducer;

// ================================================== THE END ==================================================
