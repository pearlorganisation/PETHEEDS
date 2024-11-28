import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";
import axios from "axios";

export const createHomebanner = createAsyncThunk(
  "/banner",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/banner", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
