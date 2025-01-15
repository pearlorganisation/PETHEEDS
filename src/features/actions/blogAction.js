// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const getBlog = createAsyncThunk(
  "blog/getBlog",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/blog", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getBlogBySlug = createAsyncThunk(
  "blog/getBlogBySlug",
  async ({ slug }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/blog/single/${slug}`, {
        withCredentials: true,
      });
      return data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ================================================== THE END ==================================================
