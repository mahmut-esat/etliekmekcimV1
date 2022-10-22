import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.items.find(item => item.id === action.payload.id);

      if (cartItem) {
        cartItem.quantity = cartItem.quantity + 1;
      } else {
        state.items = [...state.items, action.payload];
      }
    },

    increase: (state, {payload}) => {
      const cartItem = state.items.find(item => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },

    decrease: (state, {payload}) => {
      const cartItem = state.items.find(item => item.id === payload.id);
      cartItem.quantity = cartItem.quantity - 1;
    },

    removeFromCart: (state, action, id) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id != itemId);
    },

    removeAllCart: state => {
      state.items = [];
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.items.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const {addToCart, removeAllCart, removeFromCart, increase, decrease, calculateTotals, AddToCartByAmount} =
  cartSlice.actions;
export default cartSlice.reducer;
