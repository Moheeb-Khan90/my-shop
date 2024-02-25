import './AllProduct.css'
import { FaStar } from "react-icons/fa6";
import { STATUS } from '../../Store/AllProduct'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Filter from '../Filter/Filter'
import automaticScrollUp from '../../Utils/ScrollUp';
import { useSelector } from 'react-redux';

const ProductsCards = ({ allProduct, status }) => {
  //search selector
  const search = useSelector((state) => state.search)
  //filteration
  const filteredProducts = allProduct.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  //Scroll Up Page
  automaticScrollUp();
  return (
    <>

      <div className='Product-head'>
        <h1>All Products</h1>
      </div>
      <Filter />
      {
        status === STATUS.LOADING ? <Loading /> : null
      }
      <div id='card-wrapper'>
        <div id='card-main' >
          {filteredProducts.map((item) => (
            <div id="all-product-card-body" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <div id="all-product-card-img">
                  <img src={item.image} alt="fd" />
                </div>
              </Link>
              <div id="all-product-card-title">
                <h6>{item.title.length > 25 ? `${item.title.slice(0, 30)}...` : item.title}</h6>
              </div>
              <div id="all-product-card-price" >
                <h5 className='all-product-product-price'>Price - {item.price} Rs </h5>
              </div>
              <div id="rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    style={{
                      color: index < Math.floor(item.rating.rate) ? '#f39c12' : 'gray',
                    }}
                  />
                ))}
                | Count: {item.rating.count}
              </div>
              {/* <div id="product-checkout" >
                <Link to={`/product/${item.id}`} id='product-button'>check out</Link>
              </div> */}
              <div id="product-button" >
                <Link to={`/product/${item.id}`} id='allproduct-checkout'>check out</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsCards
