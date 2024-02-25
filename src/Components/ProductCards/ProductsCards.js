import './ProductsCards.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../Store/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { STATUS } from '../../Store/ProductSlice'
import { FaStar } from "react-icons/fa6";
import Loading from '../Loading/Loading'
import automaticScrollUp from '../../Utils/ScrollUp';
import Filter from '../Filter/Filter';


const ProductsCards = () => {

  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.product)
  //search selector
  const search = useSelector((state) => state.search)
  //filteration
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])
  //Scroll Up Page
  automaticScrollUp();

  if (status === STATUS.ERROR) {
    return <h2>Conection Failed | Check your internet connection</h2>;
  }
  return (
    <>


      <div className='main-Product-head' style={{ 'paddingTop': '0px' }}>
        <div >
          <span >just </span><span>for </span> <span>you</span>
        </div>

      </div>
      <Filter />
      {
      status === STATUS.LOADING ? <Loading /> : null
      }
      <div id='main-card-wrapper'>
        <div id='product-main-card' >
          {filteredProducts.map((item) => (
            <div id="product-card-body" key={item.id}>
              <Link to={`/product/${item.id}`} >
                <div id="product-card-img">
                  <img src={item.image} alt="fd" />
                </div>
              </Link>
              <div id="card-title">
                <h6>{item.title.length > 18 ? `${item.title.slice(0, 30)}...` : item.title}</h6>
              </div>
              <div id="product-card-price" >
                <h5 className='product-price'>Price - {item.price} Rs </h5>
              </div>
              <div id="product-rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    style={{
                      color: index < Math.floor(item.rating.rate) ? '#f39c12' : 'gray',
                    }}
                  />
                ))}
                | Count: {item.rating.count}
                {/* <p><span style={{'color':'yellow'}}><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>{item.rating.rate} 
                | Count: {item.rating.count}</p> */}
              </div>
              <div id="product-btn" >
                <Link to={`/product/${item.id}`} id='product-checkout'>check out</Link>
              </div>
            </div>
          ))}
        </div>
        <div id="more-product" className='my-2'>

          <Link to="/products" id="load-more-btn" className="load-more-link">more product</Link>

        </div>
      </div>
    </>
  )
}

export default ProductsCards
