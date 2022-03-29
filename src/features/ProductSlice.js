import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState={

    items:[],
    status:null
}
//action creators
export const ProductFetch  =createAsyncThunk(
"products/ProductFetch",
async() => {
    const response = await axios.get('/https://felix-shop-api.herokuapp.com/products')
    return response?.data
}
)

const ProductSlice = createSlice({
 name: 'Products',
 initialState,
 reducers:{ },
 extraReducers:{
     [ProductFetch.pending]:(state,action) =>{
         state.status='pending'
     },
     [ProductFetch.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = "success";
     },
    [ProductFetch.rejected]:(state,action) =>{
        state.status='rejected'
    }
 }



})
export default ProductSlice.reducer