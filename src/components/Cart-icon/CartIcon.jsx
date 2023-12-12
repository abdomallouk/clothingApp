import { useContext, useState } from 'react'
// import { CartContext } from '../../contexts/cart.context'
import { ShoppingIcon, CartIconContainer, ItemCount } from './CartIconStyle'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'



const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)
  const ToogleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  // const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext)

 

  return (
    <CartIconContainer onClick={ToogleIsCartOpen}>
        <ShoppingIcon className='shopping-cart' /> 
        <ItemCount>{cartCount}</ItemCount>
      
    </CartIconContainer>
  )
}

export default CartIcon
