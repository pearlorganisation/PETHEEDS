import { createSlice, current } from "@reduxjs/toolkit";
import { data } from "autoprefixer";
import { toast } from "sonner";
const initialState = {
  isLoading: false,
  cartData: [],
  errorMessage: "",
};

const channel = new BroadcastChannel("cart-sync");

channel.onmessage = (event) => {
  if (data.type === "INCREASE_CART") {
    // store.dispatch(increaseItem(data.data));
  }
  console.log("sagsagfjsadf", event);
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
        const temp = current(state.cartData)?.map((item) => {
          console.log("temp", action.payload);
          if (item?._id === action.payload?._id) {
            const updatedData = { ...item, items: item.items + 1 };
            return {
              ...updatedData,
              totalSum: updatedData?.items * updatedData?.totalPrice,
            };
          }
          return item;
        });
        state.cartData = temp;

        toast.success("Added...", {
          position: "top-center",
        });
      } else {
        const existingData = [
          ...current(state.cartData),
          {
            items: 1,
            totalSum: action?.payload?.totalPrice,
            ...action.payload,
          },
        ];
        console.log(existingData, action.payload);
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
            totalSum: updatedData?.items * updatedData?.totalPrice,
          };
        }
        return item;
      });
      state.cartData = temp;
      // increaseChannel.postMessage({ type: "INCREASE_CART", data: { state } });

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
            totalSum: updatedData?.items * updatedData?.totalPrice,
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
    clearCart: (state, action) => {
      state.cartData = [];
    },
    updateCart: (state, action) => {
      state.cartData = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
  updateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
