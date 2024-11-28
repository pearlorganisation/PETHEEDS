import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { injectStore } from "./services/axiosInterceptor.js";
import store from "./features/store.js";
import persistStore from "redux-persist/es/persistStore";
import { Toaster } from "sonner";
import { BrowserRouter } from "react-router-dom";

injectStore(store)
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster position="top-center" richColors />

      </PersistGate>

    </Provider>
  </BrowserRouter>
  </React.StrictMode>
);
