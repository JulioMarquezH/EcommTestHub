import { configureStore } from '@reduxjs/toolkit'
import productCarouselLeftReducer from './src/feature/carousel/carouselLeft'
import productCarouselRigthReducer from './src/feature/carousel/carouselRigth'
import productCarouselCountReducer from './src/feature/carousel/carouselCount'



export default configureStore({
  reducer: {
    productCarouselLeftReducer,
    productCarouselRigthReducer,
    productCarouselCountReducer
  },
})