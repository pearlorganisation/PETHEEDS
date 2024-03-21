// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instance";

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

// ================================================== THE END ==================================================
