import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//create bookNow

export const sendOrderMail = createAsyncThunk(
  'sendOrderMail',
  async ({id,payload}, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/mail/sendOrderMail/${id}`, payload, {
        withCredentials: true,
       
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);