import './SpecificCategory.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSpecificCategory } from '../../Store/SpecificCategorySlice'
import { useParams } from 'react-router-dom'
import { STATUS } from '../../Store/SpecificCategorySlice'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import automaticScrollUp from '../../Utils/ScrollUp'
import Loading from '../Loading/Loading'
const SpecificCategory = () => {
  const { ct } = useParams()
  const dispatch = useDispatch()

  const { data, status } = useSelector((state) => state.SpecificCategory)

  useEffect(() => {
    dispatch(fetchSpecificCategory(ct))
  }, [ct,dispatch])

  //Automatic scroll up
  automaticScrollUp()
  return (
    <>
      {
            status === STATUS.LOADING ? <Loading /> : null
          }
          <div className='Produc-head my-4'>
            <h1>{ct}</h1>
            <Link to='/products' className='reset-link'>reset filter</Link>
          </div>
          <hr />
       
          <div id='card-wrapper'>
            <div id='card-main' >
              {data.map((item) => (
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
                  <div id="card-checkout" >
                    <Link to={`/product/${item.id}`} id='checkout-btn'>check out</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div id="more-product" className='my-2 me-2'>
          <Link to="/products" id="load-more-btn" className="load-more-link">All Product</Link>
        </div>
    </>
  )
}

export default SpecificCategory