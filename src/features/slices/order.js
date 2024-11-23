// ----------------------------------------------------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

import { toast } from "sonner";
import { getAllUserOrders } from "../actions/order";


const initialState = {
  isLoading: false,
  isSuccess: false,
  ordersData: [],
  errorMessage: "",
};

// ---------------------------------------------------------------------------------------

export const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      

      .addCase(getAllUserOrders.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(getAllUserOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.ordersData = action.payload.data;
      })
      .addCase(getAllUserOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
        toast.error(action?.payload || "Something went wrong");
      })

     
  },
});

// -------------------------------------------------------------------------

// Action creators are generated for each case reducer function
export const {} = ordersSlice.actions;
export default ordersSlice.reducer;

// ================================================== THE END ==================================================
