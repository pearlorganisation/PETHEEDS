// cartBroadcastListener.js
import { addToCart, decreaseItem, increaseItem, removeItem } from "../../../features/slices/cartSlice";
import store from "../../../features/store"
const cartChannel = new BroadcastChannel("cartChannel");

const listenToCartBroadcast = () => {
  cartChannel.onmessage = (event) => {
    
    // Dispatch appropriate actions based on event data
    switch (event.data.type) {
      case 'INCREASE_ITEM':
        {
            console.log("we are on to the INCREASE_ITEM");    
            store.dispatch(increaseItem(event.data.data)); // Dispatch add item action
            break;
        }
        
      case 'DECREASE_ITEM':
       { 
        console.log("we are on to the DECREASE_ITEM");
        store.dispatch(decreaseItem(event.data.data)); // Dispatch remove item action
        break;
      }
      case 'REMOVE_ITEM':
       {
        console.log("we are on to the REMOVE_ITEM");
        store.dispatch(removeItem(event.data.data)); // Dispatch update cart action
        break;
    }
      case 'ADD_ITEM':
       {
        console.log("we are on to the ADD_ITEM");
        store.dispatch(addToCart(event.data.data)); // Dispatch update cart action
        break;
    }
      default:
        break;
    }
  };
};






export default listenToCartBroadcast;
