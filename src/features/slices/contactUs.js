import { createSlice } from "@reduxjs/toolkit";

import { createContactUs } from "../actions/contactUs";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  errorMessage: "",
  contactUsData: [],
};

const contactUsSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {
    clearcontactUs: (state, action) => {
      state.contactUsData = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createContactUs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createContactUs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactUsData = action.payload.data;
        toast.success("contactUs Booked successfully", {
          position: "top-center",
        });
      })

      .addCase(createContactUs.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
        ? action.payload
        : "An error occurred while creating the contactUs.";
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

export default contactUsSlice.reducer;
export const { clearcontactUs } = contactUsSlice.actions;
