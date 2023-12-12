import './CheckoutItem.scss'
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, clearItemFromCart, decreaseItemQuantity } from "../../store/cart/cart.action";

const ChekoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addHandler = () => dispatch(addItemToCart(cartItems,cartItem));
    const decreaseHandler = () => dispatch (decreaseItemQuantity(cartItems, cartItem));
    const clearHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  


    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='name'> {name} </span>

            <span className='quantity'>
                <div className='arrow' onClick={decreaseHandler}>  &#10094; </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addHandler}>&#10095;</div>
            </span>

            <span className='price'> {price}</span>

            <div className='remove-button' onClick={clearHandler}>  &#10005; </div>

        </div>
    )
}

export default ChekoutItem
