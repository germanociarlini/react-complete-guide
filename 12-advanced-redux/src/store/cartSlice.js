import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isShowing: true, products: [] },
  reducers: {
    toggle(state) {
      state.isShowing = !state.isShowing;
    },
    add(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        state.products.map((product) => {
          if (product.id === action.payload.id) {
            product.total += product.price;
            product.quantity += 1;
          }
          return product;
        });
      } else {
        const newProduct = {
          ...action.payload,
          total: action.payload.price,
          quantity: 1,
        };
        state.products = [...state.products, newProduct];
      }
    },
    remove(state, action) {
      const product = state.products.find(
        (product) => product.id === action.payload
      );
      if (product) {
        if (product.quantity === 1) {
          state.products = state.products.filter(
            (product) => product.id !== action.payload
          );
        } else {
          state.products = state.products.map((product) => {
            if (product.id === action.payload) {
              product.quantity -= 1;
              product.total -= product.price;
            }
            return product;
          });
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
