import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';
import axios from 'axios';

//get all subject api
export const getAllSubjects = createAsyncThunk(
  'getSubject',
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/subject', payload, {
        withCredentials: true,
      });
      console.log(data, 'datatattatatatat');
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

