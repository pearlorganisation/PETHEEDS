// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const getCategory = createAsyncThunk(
  "categroy/getCategory",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/category", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ================================================== THE END ==================================================
