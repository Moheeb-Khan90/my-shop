import React from 'react'
import './CartItem.css'
import { FaTrash } from "react-icons/fa6";
import { removeCart } from '../../Store/AddToCart';
import {  useSelector,useDispatch } from 'react-redux';

const CartItem = () => {
    const dispatch = useDispatch()
    const cartProduct = useSelector((state) => state.addToCart)
    
    const removeCartItemsHandler = (productSize) =>{
        dispatch(removeCart(productSize))
    }
    return (
        <>
        
            <div id="cart-container">
                {

                    cartProduct && cartProduct.map((data) => (
                        
                        <div id="cart-items">
                            <div id="cart-image">
                                <input type="checkbox" id='items-include' />
                                <img src={data.image} alt="" />
                            </div>
                            <div id="cart-details">
                                <div>

                                    <div id='cart-title'><b>title:</b>{data.name}</div>
                                    <div id='cart-quantity'><b>qty:</b>  {data.quantity}</div>
                                    <div id='cart-size'><b>size:</b> {data.size}</div>
                                </div>

                                <div id="cart-price">
                                    <span>price: {data.price}$</span>
                                    <span id='cart-delete' onClick={() => removeCartItemsHandler(data.size)}><FaTrash /></span>
                                </div>
                            </div>
                        </div>

                    ))}
            </div>

        </>
    )
}

export default CartItem