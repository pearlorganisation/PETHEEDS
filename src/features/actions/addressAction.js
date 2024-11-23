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
      const response = await instance.get(`/address/${id}`, {
        withCredentials: true,
      });
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const updateAddress = createAsyncThunk(
  "updateAddress",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/address/${id}`, payload, {
        withCredentials: true,
      });
      console.log(response?.data);
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "deleteAddress",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/address/${id}`, {
        withCredentials: true,
      });
      return { _id: id, ...response?.data };
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
