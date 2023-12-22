import { createSlice } from "@reduxjs/toolkit";

const addCartItem = (cartItems, productToAdd) => {
  const foundedItem = cartItems.find(
    (cartItem) => productToAdd.id === cartItem.id
  );

  if (foundedItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decreaseQuantity = (cartItems, itemToDecrease) => {
  const foundedItem = cartItems.find(
    (cartItem) => itemToDecrease.id === cartItem.id
  );

  if (foundedItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToDecrease.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    decreaseItemQuantity(state, action) {
      state.cartItems = decreaseQuantity(state.cartItems, action.payload);
    },
    clearItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
  },
});


export const { setIsCartOpen, addItemToCart, decreaseItemQuantity, clearItemFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
