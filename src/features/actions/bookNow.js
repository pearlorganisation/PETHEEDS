import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';
import axios from 'axios';

//create bookNow

export const createAppointment = createAsyncThunk(
  'createBookNow',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/appointment`, payload, {
        withCredentials: true,
       
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);