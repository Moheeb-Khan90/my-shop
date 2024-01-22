import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../ProductSlice'
import singleproductReducer from '../singleProductSlice'
import allProductReducer from '../AllProduct'

export const store = configureStore({
  reducer: {
    product:productReducer,
    singleProduct:singleproductReducer,
    allProduct: allProductReducer
  },
})