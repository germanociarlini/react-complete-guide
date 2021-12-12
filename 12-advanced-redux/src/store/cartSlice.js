import { createSlice } from "@reduxjs/toolkit";

const toggle = (state) => {
  state.isShowing = !state.isShowing;
};

const set = (state, action) => {
  state.totalItems = action.payload.totalItems || 0;
  state.products = action.payload.products || [];
};

const add = (state, action) => {
  const addedProduct = action.payload;
  const existingProduct = state.products.find(
    (product) => product.id === addedProduct.id
  );
  state.totalItems++;
  if (existingProduct) {
    existingProduct.quantity++;
    existingProduct.total += existingProduct.price;
  } else {
    state.products.push({
      id: addedProduct.id,
      name: addedProduct.name,
      price: addedProduct.price,
      total: addedProduct.price,
      quantity: 1,
    });
  }
};

const remove = (state, action) => {
  const removedId = action.payload;
  const removedProduct = state.products.find(
    (product) => product.id === removedId
  );
  state.totalItems--;
  if (removedProduct) {
    if (removedProduct.quantity === 1) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    } else {
      removedProduct.quantity--;
      removedProduct.total -= removedProduct.price;
    }
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { isShowing: true, products: [], totalItems: 0 },
  reducers: { toggle, set, add, remove },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
