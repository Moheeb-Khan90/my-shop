import React from 'react'
import './CartItem.css'
import {  FaTrash } from "react-icons/fa6";

const CartItem = () => {
    return (
        <>
            <div id="cart-container">
                <div id="cart-items">
                    <div id="cart-image">
                        <input type="checkbox" id='items-include'/>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                    </div>
                    <div id="cart-details">
                        <div>

                            <div id='cart-title'><b>title:</b> Mens Casual Premium Slim Fit T-Shirts</div>
                            <div id='cart-quantity'><b>qty:</b> 4</div>
                            <div id='cart-size'><b>size:</b> small</div>
                        </div>

                        <div id="cart-price">
                            <span>price: 12$</span>
                            <span id='cart-delete'><FaTrash /></span>
                        </div>
                    </div>
                </div>

              
            </div>

        </>
    )
}

export default CartItem