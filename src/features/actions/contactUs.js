import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';
import axios from 'axios';

//create bookNow

export const createContactUs = createAsyncThunk(
  'add callback',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/callbackRequest`, payload, {
        withCredentials: true,
       
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);