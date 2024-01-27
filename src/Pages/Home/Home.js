import React, { useEffect } from 'react'

import Banner from '../../Components/Banner/Banner'
import Product from '../../Components/ProductCards/ProductsCards'


 const Home = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    {/* <Navbar/> */}
    <Banner/>
    <Product/>
    
    </>
  )
}
export default Home 
