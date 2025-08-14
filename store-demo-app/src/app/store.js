import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice'; // We'll create this

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
    },
});