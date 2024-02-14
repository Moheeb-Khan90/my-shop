import React, { useEffect } from 'react'

import Banner from '../../Components/Banner/Banner'
import Product from '../../Components/ProductCards/ProductsCards'
import Filter from '../../Components/Filter/Filter'


 const Home = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* <Navbar/> */}
    <Banner/>
    <Filter/>
    <Product/>
    
    </>
  )
}
export default Home 
