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
    addToCart: (state, action) => {
      const isExist = state.cartData?.some(
        (item) => item?._id === action.payload?._id
      );
      if (isExist) {
        toast.error("Item Already Exist", {
          position: "top-center",
        });
      } else {
        const existingData = [
          ...current(state.cartData),
          { items: 1, totalPrice: action?.payload?.price, ...action.payload },
        ];
        console.log(existingData);
        state.cartData = existingData;
        toast.success("Item Added", {
          position: "top-center",
        });
      }
    },
    increaseItem: (state, action) => {
      const temp = current(state.cartData)?.map((item) => {
        if (item?._id === action.payload?.id) {
          const updatedData = { ...item, items: item.items + 1 };
          return {
            ...updatedData,
            totalPrice: updatedData?.items * updatedData?.price,
          };
        }
        return item;
      });
      state.cartData = temp;

      console.log("temp", temp);
    },
    decreaseItem: (state, action) => {
      const temp = current(state.cartData)?.map((item) => {
        if (item?._id === action.payload?.id) {
          const updatedData = {
            ...item,
            items: item.items > 1 ? item.items - 1 : item.items,
          };
          return {
            ...updatedData,
            totalPrice: updatedData?.items * updatedData?.price,
          };
        }
        return item;
      });
      state.cartData = temp;
    },

    removeItem: (state, action) => {
      const newitems = state.cartData.filter(
        (item) => item._id != action.payload.id
      );
      state.cartData = newitems;
    },
  },
});

export const { addToCart, increaseItem, decreaseItem, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
