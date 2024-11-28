// -----------------------------------------------------------------------------------------------------

import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";


export const getAllUserOrders = createAsyncThunk(
  "booking/id",
  async (userId , { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`booking/${userId}`, {
        withCredentials: true,
      });
     
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);






// ================================================== THE END ==================================================
