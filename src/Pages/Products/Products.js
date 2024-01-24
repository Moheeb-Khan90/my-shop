import React from 'react'
import AllProduct from '../../Components/AllProduct/AllProduct'
import { fetchAllProduct } from '../../Store/AllProduct'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const Product = () => {
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.allProduct)

  useEffect(() => {
    dispatch(fetchAllProduct())
  }, [dispatch])

  return (
    <>
      <AllProduct allProduct={data} status={status}/>
    </>
  )
}

export default Product