import './ProductsCards.css'
import { Link } from 'react-router-dom';
import { fetchProduct } from '../../Store/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { STATUS } from '../../Store/ProductSlice'
import Loading from '../Loading/Loading'


const ProductsCards = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch])

  if (status === STATUS.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      {
        status === STATUS.LOADING ? <Loading /> : null
      }

      <div className='Produc-head my-4'>
        <h1>just for you</h1>
      </div>
      <hr />
      <div id='card-wrapper'>
        <div id='card-main' >
          {data.map((item) => (
            <div id="card-body"  key={item.id}>
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
        <div id="more-product" className='my-2'>
              
                  <Link to="/products" id="load-more-btn" className="load-more-link">more product</Link>
              
        </div>
      </div>
    </>
  )
}

export default ProductsCards
