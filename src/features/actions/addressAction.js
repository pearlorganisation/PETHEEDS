import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//create bookNow

export const createAddress = createAsyncThunk(
  "createAddress",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/address`, payload, {
        withCredentials: true,
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAddress = createAsyncThunk(
  "getAddress",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/address`, {
        withCredentials: true,
      });
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
