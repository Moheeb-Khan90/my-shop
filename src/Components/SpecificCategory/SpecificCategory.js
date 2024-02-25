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
     
          <div className='filter-Product-head my-4'>
            <span>{ct}</span>
            <Link to='/products' className='reset-link'>reset filter</Link>
          </div>
          <hr />
          {
            status === STATUS.LOADING ? <Loading /> : null
          }
          <div id='filter-card-wrapper'>
            <div id='filter-card-main' >
              {data.map((item) => (
                <div id="filter-card-body" key={item.id}>
                  <div id="filter-card-img">
                    <img src={item.image} alt="fd" />
                  </div>
                  <div id="filter-card-title">
                    <span>{item.title.length > 25 ? `${item.title.slice(0, 30)}...` : item.title}</span>
                  </div>
                  <div id="filter-card-price" >
                    <h5 className='filter-price'>Price - {item.price} Rs </h5>
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
                  <div id="filter-card-checkout" >
                    <Link to={`/product/${item.id}`} id='filter-checkout-button'>check out</Link>
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