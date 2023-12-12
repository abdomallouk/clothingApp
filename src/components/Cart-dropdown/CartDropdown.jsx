import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

// import { CartContext } from "../../contexts/cart.context";
import CartItem from "../Cart-item/CartItem";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./CartDropdownStyle";

const CartDropdown = () => {
  const navigate = useNavigate();
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)

  const GoToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>You cart is emphty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={GoToCheckoutHandler}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
