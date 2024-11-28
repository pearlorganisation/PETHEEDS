// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { addReview, getReview } from "../actions/reviewAction";

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
    clearReview: (state, action) => {
      state.reviewData = [];
      state.singleReviewStar = 0;
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
        state.reviewData = action.payload;
        state.errorMessage = "";
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      })

      //getReview
      .addCase(getReview.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.reviewData = action.payload;
        state.errorMessage = "";
      })
      .addCase(getReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { setStar, clearReview } = reviewSlice.actions;
export default reviewSlice.reducer;

// ================================================== THE END ==================================================
