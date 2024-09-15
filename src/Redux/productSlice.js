import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { incrementitem } from "./cartSlice";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const res = await axios('http://localhost:3000/product/get',{
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res.data);
        return res.data.products;
    }
)

const productSlice = createSlice({
    name:"product",
    initialState:{
        products : [],
        isLoading:false,
        status :  'idle' ,
        error : null,
    },
    reducers:{
        setProduct : (state, action)=>{
            state.products=action.payload;
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.products = Array.isArray(action.payload) ? action.payload : [];;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message;
        });
    },
});

export default productSlice.reducer;
export const {setProduct} = productSlice.actions;
