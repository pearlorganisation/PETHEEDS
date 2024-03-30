// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

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
export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`product/${productId}`, {
        withCredentials: true,
      });
      console.log(data, "action data");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ================================================== THE END ==================================================
