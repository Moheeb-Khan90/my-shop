import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../ProductSlice'
import singleproductReducer from '../singleProductSlice'
import SpecificCategoryREducer from '../SpecificCategorySlice'
import allProductReducer from '../AllProduct'
import allCategoryReducer from '../AllCategory'

export const store = configureStore({
  reducer: {
    product:productReducer,
    singleProduct:singleproductReducer,
    allProduct: allProductReducer,
    allCategoryProduct:allCategoryReducer,
    SpecificCategory:SpecificCategoryREducer
  },
})