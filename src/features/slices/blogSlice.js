// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";
import { getBlog, getBlogBySlug } from "../actions/blogAction";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  isSuccess: false,
  blogData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const blogSlice = createSlice({
  name: "blogSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getBlog.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.blogData = action.payload.data;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      })

      // get blog by slug
      .addCase(getBlogBySlug.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getBlogBySlug.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogData = action.payload;
      })
      .addCase(getBlogBySlug.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error("Error while getting blog!!", { position: "top-center" });
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = blogSlice.actions;
export default blogSlice.reducer;

// ================================================== THE END ==================================================
