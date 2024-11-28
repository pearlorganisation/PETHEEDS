// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";
import { getBlog } from "../actions/blogAction";
import { toast } from "sonner";
import { getCategory } from "../actions/categoryAction";

const initialState = {
  isLoading: false,
  isSuccess: false,
  categoryData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getCategory.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.categoryData = action.payload.data;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = categorySlice.actions;
export default categorySlice.reducer;

// ================================================== THE END ==================================================
