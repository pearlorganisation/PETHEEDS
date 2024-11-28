// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import {
  createAddress,
  deleteAddress,
  getAddress,
  updateAddress,
} from "../actions/addressAction";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isAddressDeleted: false,
  addressData: [],
  selectedAddress: null,
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const addressSlice = createSlice({
  name: "addressSlice",
  initialState,
  reducers: {
    selectAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createAddress.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.addressData = action.payload.data;
        toast.success("Address Added Successfully");
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      })
      .addCase(updateAddress.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.addressData = action.payload;
        toast.success("Address Updated Successfully");
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      })

      .addCase(getAddress.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.isAddressDeleted = false;
        (state.selectedAddress = null),
          (state.addressData = action.payload.data);
      })
      .addCase(getAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      })
      .addCase(deleteAddress.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.isAddressDeleted = true;
        (state.selectedAddress = null),
          // (state.addressData = state.addressData.filter(
          //   (item) => item?._id != action.payload?._id
          // ));
          toast.success("Address Deleted Successfully");
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      });
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const { selectAddress } = addressSlice.actions;
export default addressSlice.reducer;

// ================================================== THE END ==================================================
