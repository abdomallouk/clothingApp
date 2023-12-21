import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/Cart-icon/CartIcon";
import CartDropdown from "../../components/Cart-dropdown/CartDropdown";

import { Outlet, NavLink } from "react-router-dom";
import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  LogoContainer,
  NavLinks,
  NavigationContainer,
} from "./NavbarStyle.jsx";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUSer = () => dispatch(signOutStart());
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUSer}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
