import { createAction } from "../../utils /reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

// Action Creator for the Cart DropDown
export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

/// Action Creators that we use in the disptach
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const newCartItems = decreaseQuantity(cartItems, itemToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};


/// helper Functions
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
