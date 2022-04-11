import { configureStore } from '@reduxjs/toolkit'

import ProductReducer,{ProductFetch} from "./features/ProductSlice";
import { ProductsApi } from './features/ProductApi';
import cartReducer from './features/cartSlice'
 export const store = configureStore({
    reducer: {
      products: ProductReducer,
      cart: cartReducer,
  //for rtk query
      [ProductsApi.reducerPath]: ProductsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ProductsApi.middleware),
  });
  store.dispatch(ProductFetch());

  