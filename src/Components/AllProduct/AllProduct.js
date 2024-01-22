import './AllProduct.css'
import { Link } from 'react-router-dom';
import { STATUS } from '../../Store/AllProduct'
import Loading from '../Loading/Loading';

const ProductsCards = ({ allProduct, status }) => {

  return (
    <>
      {
        status === STATUS.LOADING ? <Loading /> : null
      }
      <div className='Produc-head my-4'>
        <h1>All Products</h1>
      </div>
      <hr />
      <div id='card-wrapper'>
        <div id='card-main' >
          {allProduct.map((item) => (
            <div id="card-body" key={item.id}>
              <div id="card-img">
                <img src={item.image} alt="fd" />
              </div>
              <div id="card-title">
                <h6>{item.title.length > 25 ? `${item.title.slice(0, 30)}...` : item.title}</h6>
              </div>
              <div id="card-price" >
                <h5 className='price'>Price - {item.price} Rs </h5>
              </div>
              <div id="rating">
                <p>ratings: {item.rating.rate} | Count: {item.rating.count}</p>
              </div>
              <div id="card-checkout" >
                <Link to={`/product/${item.id}`} id='checkout-btn'>check out</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsCards
