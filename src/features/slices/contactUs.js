import { createSlice } from '@reduxjs/toolkit';


import toast from 'react-hot-toast';
import { createContactUs } from '../actions/contactUs';


const initialState = {
  isLoading: false,
  errorMessage: '',
  contactUsData: [],
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    clearcontactUs : (state,action)=>{
      state.contactUsData = []
    }
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
          : 'An error occurred while creating the contactUs.';
      });
  },
});

export default contactUsSlice.reducer;
export const {clearcontactUs} = contactUsSlice.actions;
