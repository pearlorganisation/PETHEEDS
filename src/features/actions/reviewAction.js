import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//create bookNow

export const addReview = createAsyncThunk(
  "addReview",
  async ({ productId, formData }, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/review/${productId}`, formData, {
        withCredentials: true,
      });
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAddress = createAsyncThunk(
  "getReveiw",
  async (data, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/review`, {
        withCredentials: true,
      });
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
