import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils /reducer/reducer.utils";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";

/// helper Functions
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const decreaseQuantity = (
  cartItems: CartItem[],
  cartToDecrease: CartItem
): CartItem[] => {
  const foundedItem = cartItems.find(
    (cartItem) => cartToDecrease.id === cartItem.id
  );

  if (foundedItem && foundedItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartToDecrease.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartToDecrease.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  cartToClear: CartItem
): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== cartToClear.id);

export type SetCartIsopen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;
export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

// Action Creator for the Cart DropDown
export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetCartIsopen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

/// Action Creators that we use in the disptach
export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const decreaseItemQuantity = (
  cartItems: CartItem[],
  cartToDecrease: CartItem
) => {
  const newCartItems = decreaseQuantity(cartItems, cartToDecrease);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartToClear);
  return setCartItems(newCartItems);
};
