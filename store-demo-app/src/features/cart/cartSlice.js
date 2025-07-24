import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeItem: (state, action) => {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    itemToRemove.quantity--;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
            state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;