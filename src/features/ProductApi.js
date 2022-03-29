
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProductsApi = createApi({
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://felix-shop-api.herokuapp.com/' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
})

export const { useGetAllProductsQuery } = ProductsApi