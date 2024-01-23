import './SingleProductCom.css';
import { useState,useEffect } from 'react';
import Loading from '../../Components/Loading/Loading'
import { STATUS } from '../../Store/ProductSlice'

const SingleProductCom = ({ SingleProduct, status}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const setActive = (size) => {
    setSelectedButton(size);
  };
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
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
          <div id="pd-button">
            <button id="pd-buyNow">buy now</button>
            <button id="pd-addCart">add to cart</button>
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
