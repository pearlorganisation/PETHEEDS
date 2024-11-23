import { createSlice } from "@reduxjs/toolkit";

import { createAppointment } from "../actions/bookNow";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  errorMessage: "",
  appointmentData: [],
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    clearAppointment: (state, action) => {
      state.appointmentData = [];
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(createAppointment.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointmentData = action.payload.data;
        toast.success("Appointment Booked successfully", {
          position: "top-center",
        });
      })

      .addCase(createAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload
        ? action.payload
        : "An error occurred while creating the Appointment.";
        toast.error(state?.errorMessage, {
          position: "top-right",
        });
      });
  },
});

export default appointmentSlice.reducer;
export const { clearAppointment } = appointmentSlice.actions;
