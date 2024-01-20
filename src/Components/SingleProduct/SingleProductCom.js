import './SingleProductCom.css'
const SingleProductCom = ({ SingleProduct }) => {

  return (
    <>

      <div className='container my-5 p-4' id="product-wrapper">
        <div id="product-image">
          <img src={SingleProduct.image} alt="" />
        </div>
        <div id="product-details">
          <div id="product-heading">
            <span>{SingleProduct.title}</span>
          </div>
          <div id="product-ratings">
            {/* <span>ratings: {SingleProduct.rating.rate} | total count: {SingleProduct.rating.count}</span> */}
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
            <button className='size-product' >S</button>
            <button className='size-product'>M</button>
            <button className='size-product'>L</button>
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
  )
}

export default SingleProductCom