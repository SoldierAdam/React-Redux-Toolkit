import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
	  cartItems: [],
	},
	reducers: {
	  addToCart: (state:any, action) => {
		state.cartItems.push(action.payload);
	  },
	  removeFromCart: (state, action) => {
		state.cartItems = state.cartItems.filter((item:any) => item.id !== action.payload.id);
	  },
	  clearCart: (state) => {
		state.cartItems = [];
	  },
	},
  });
  
  export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;
