// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/instance";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/product", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ================================================== THE END ==================================================
