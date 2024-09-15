import { configureStore } from '@reduxjs/toolkit';
import blogslice from './blogslice';
import cartSlice from './cartSlice';
import productSlice from './productSlice';



const store = configureStore({
  reducer: {
    blog: blogslice,
    cart: cartSlice,
    product : productSlice
  }
});

export default store;
