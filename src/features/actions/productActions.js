// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ page, limit = 2, search, category, sort }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/product/?page=${page}&limit=${limit}&productName=${
          search || ""
        }&category=${category || ""}&sort=${sort || ""}`,
        {
          withCredentials: true,
        }
      );
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

export const getProductByCategory = createAsyncThunk(
  "products/getProductByCategory",
  async ({ query }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`product${query}`, {
        withCredentials: true,
      });
      console.log(data, "action data");
      return data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getBrands = createAsyncThunk(
  "products/getBrands",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`brand`, {
        withCredentials: true,
      });
      console.log(data, "action data");
      return data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getNewInStore = createAsyncThunk(
  "products/getNewInStore",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`newInStore`, {
        withCredentials: true,
      });
      console.log(data, "action data");
      return data?.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ================================================== THE END ==================================================
