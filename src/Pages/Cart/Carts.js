import React from 'react'
import CartItem from '../../Components/CartItems/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  
  const cartProduct = useSelector((state) => state.addToCart)
  return (
    <>
    {
      cartProduct.length > 0?<CartItem/>:
      <h4 className=' mx-3 my-3'>No Items Available </h4>
    }
      
    </>
  )
}

export default Cart