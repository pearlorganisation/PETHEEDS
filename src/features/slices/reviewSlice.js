// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { addReview } from "../actions/reviewAction";

const initialState = {
  isLoading: false,
  isSuccess: false,
  reviewData: [],
  // I'am using  singleReviewStar on Add Review
  singleReviewStar: 0,
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const reviewSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    setStar: (state, action) => {
      state.singleReviewStar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addReview.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { setStar } = reviewSlice.actions;
export default reviewSlice.reducer;

// ================================================== THE END ==================================================
