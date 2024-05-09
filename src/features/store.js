import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import cartReducer from "./slices/cartSlice";
import blogReducer from "./slices/blogSlice";
import HomeBanner from "./slices/HomeBanner";
import productReducer from "./slices/productSlice";
import categoryReducer from "./slices/categorySlice";

import auth from "./slices/auth";
import appointment from "./slices/bookNow";
import subject from "./slices/subject";
import contactUs from "./slices/contactUs";

// Combine your individual reducers here
const rootReducer = combineReducers({
  cart: cartReducer,
  blogs: blogReducer,
  products: productReducer,
  auth,
  HomeBanner,
  appointment,
  subject,
  contactUs,
  category: categoryReducer,
});

// Custom root reducer handling a clear action
const rootReducerWithClear = (state, action) => {
  if (action.type === "petheeds/clearReduxStoreData") {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
  }
  return rootReducer(state, action);
};

// Redux-persist configuration
const persistConfig = {
  key: "PetHeedsClientPanle",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_REACT_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducerWithClear);

// Configure and create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT == "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
