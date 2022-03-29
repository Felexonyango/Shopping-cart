import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ProductReducer,{ProductFetch} from "./features/ProductSlice";
import { ProductsApi } from './features/ProductApi';
import cartReducer from './features/cartSlice'
const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: cartReducer,

    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});

store.dispatch(ProductFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
