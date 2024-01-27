import './SingleProductCom.css';
import { useState } from 'react';
import { STATUS } from '../../Store/ProductSlice'
import { addCart } from '../../Store/AddToCart';
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import Loading from '../Loading/Loading'
import automaticScrollUp from '../../Utils/ScrollUp';

const SingleProductCom = ({ SingleProduct, status }) => {
  const disPatch = useDispatch();
  // Quantity Increment or Decrement Functionality
  const [quantity, setquantity] = useState(1)
  const decrement = () => {
    quantity > 1 ? setquantity(quantity - 1) : setquantity(1)
  }
  const increment = () => {
    setquantity(quantity + 1)
  }

  //Button 
  const [selectedButton, setSelectedButton] = useState("S");

  const setActive = (size) => {
    setSelectedButton(size);
  };
  //Scroll Up Page
  automaticScrollUp();

  //handle for add to cart
  const productCart = {
    id: SingleProduct.id,
    name: SingleProduct.title,
    image: SingleProduct.image,
    price: SingleProduct.price,
    quantity: quantity,
    size: selectedButton
  }
  const addToCartHandler = () => {
    disPatch(addCart(productCart))
  }
  return (
    <>

      {
        status === STATUS.LOADING ? <Loading /> : null
      }
      <div className='container my-5 p-4' id="product-wrapper">
        <div id="product-image">
          <img src={SingleProduct.image} alt="" />
        </div>
        <div id="product-details">
          <div id="product-heading">
            <span>{SingleProduct.title}</span>
          </div>
          <div id="product-ratings">
            {SingleProduct.rating && (
              <span>ratings: {SingleProduct.rating.rate} | total count: {SingleProduct.rating.count}</span>
            )}
          </div>
          <div id="product-price">
            <span>price: {SingleProduct.price}$</span>
          </div>

          {SingleProduct.category === "men's clothing" || SingleProduct.category === "women's clothing" ? (
            <div id='product-size'>
              <p>Size</p>
              <button onClick={() => setActive('S')} className={`${selectedButton === 'S' && 'active-size-button'} size-product`}>S</button>
              <button onClick={() => setActive('M')} className={`${selectedButton === 'M' && 'active-size-button'} size-product`}>M</button>
              <button onClick={() => setActive('L')} className={`${selectedButton === 'L' && 'active-size-button'} size-product`}>L</button>
            </div>
          ) : (
            null
          )}
          <div id="product-quantity">
            <p>Qty:</p>
            <button className="product-decrement" onClick={decrement}><FaMinus /></button>
            {quantity}
            <button className="product-increment" onClick={increment}><FaPlus /></button>
          </div>
          <div id="pd-button">
            <button id="pd-buyNow">buy now  </button>
            <button id="pd-addCart" onClick={addToCartHandler}>add to cart <FaCartPlus /></button>
          </div>
        </div>
        <div id="product-description">
          <span id='pd'>description</span>
          <span>{SingleProduct.description}</span>
        </div>
      </div>
    </>
  );
};

export default SingleProductCom;
