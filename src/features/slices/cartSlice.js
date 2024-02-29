import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  isLoading: false,
  cartData: [],
  errorMessage: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartIncrement: (state, action) => {
      const isExist = state.cartData?.some(
        (item) => item?.id === action.payload?.id
      );
      if (isExist) {
        toast.error("Item Already Exist", {
          position: "top-center",
        });
      } else {
        const existingData = [...current(state.cartData), action.payload];
        console.log(existingData);
        state.cartData = existingData;
        toast.success("Item Added", {
          position: "top-center",
        });
      }
    },
  },
});

export const { cartIncrement } = cartSlice.actions;
export default cartSlice.reducer;
