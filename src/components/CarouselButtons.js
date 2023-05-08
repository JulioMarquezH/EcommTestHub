
import * as React from "react"
import "../scss/CarouselButtons.scss"
import ButtonAction from "./ButtonAction.js"
import { useSelector, useDispatch } from 'react-redux'
import { decrementRigth, incrementRigth } from "../feature/carousel/carouselRigth"
import { decrementLeft, incrementLeft } from "../feature/carousel/carouselLeft"


const CarouselButtons = () => {
  const positionLeft = useSelector((state) => state.productCarouselLeftReducer.value)
  const positionRigth = useSelector((state) => state.productCarouselRigthReducer.value)
  const productCount = useSelector((state) => state.productCarouselCountReducer.value)
  const dispatch = useDispatch()

  const leftArrow = () => {
    return (
      <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.54069 9.67825L5.53958 9.67704L2.56705 6.42731L1.94867 5.75126L2.56816 5.07623L5.5505 1.82649C5.55647 1.81999 5.57422 1.79329 5.57422 1.74365C5.57422 1.73655 5.57386 1.72992 5.57322 1.72375L1.9521 5.66953C1.94842 5.67354 1.94418 5.67942 1.94019 5.69014C1.93601 5.70134 1.93084 5.72151 1.93084 5.75237C1.93084 5.7872 1.94303 5.82165 1.96553 5.84988L5.56342 9.78084C5.56405 9.77471 5.56441 9.76813 5.56441 9.76109C5.56441 9.71145 5.54666 9.68476 5.54069 9.67825Z" fill="#555B64" stroke="#444950" stroke-width="2"/>
      </svg>
    )
  }
  
  const rightArrow = () => {
    return(
      <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.96322 9.67825L1.96433 9.67704L4.93685 6.42731L5.55523 5.75126L4.93574 5.07623L1.95341 1.82649C1.94743 1.81999 1.92969 1.79329 1.92969 1.74365C1.92969 1.73655 1.93005 1.72992 1.93069 1.72375L5.5518 5.66953C5.55548 5.67354 5.55972 5.67942 5.56372 5.69014C5.5679 5.70134 5.57307 5.72151 5.57307 5.75237C5.57307 5.7872 5.56088 5.82165 5.53837 5.84988L1.94049 9.78084C1.93986 9.77471 1.9395 9.76813 1.9395 9.76109C1.9395 9.71145 1.95725 9.68476 1.96322 9.67825Z" fill="#555B64" stroke="#444950" stroke-width="2"/>
      </svg>
    )
  }

  const advanceCarousel = () => {
    if(positionRigth >= productCount){
    } else{
      dispatch(incrementLeft())
      dispatch(incrementRigth())
    }
  }

  const reverseCarousel = () => {
    if (positionLeft <= 0) {
    }else{
      dispatch(decrementLeft())
      dispatch(decrementRigth())
    }
  }

  return (
    <div className='block-button'>
      <ButtonAction action={reverseCarousel} icon={leftArrow}></ButtonAction>
      <ButtonAction action={advanceCarousel} icon={rightArrow}></ButtonAction>
    </div>
  )
}

export default CarouselButtons
