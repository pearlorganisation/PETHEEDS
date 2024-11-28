import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { sendOrderMail } from "../actions/orderMail";

const initialState = {
  isLoading: false,
  errorMessage: "",
  sendOrderMailData: [],
};

const sendOrderMailSlice = createSlice({
  name: "sendOrderMail",
  initialState,
  reducers: {
    clearSendOrderMail: (state, action) => {
      state.sendOrderMailData = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(sendOrderMail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendOrderMail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.sendOrderMailData = action.payload.data;
        // toast.success("Mail Sent successfully", {
        //   position: "top-center",
        // });
      })

      .addCase(sendOrderMail.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
        ? action.payload
        : "An error occurred while creating the SendOrderMail.";
        // toast.error(state?.errorMessage, {
        //   position: "top-right",
        // });
      });
  },
});

export default sendOrderMailSlice.reducer;
export const { clearSendOrderMail } = sendOrderMailSlice.actions;
