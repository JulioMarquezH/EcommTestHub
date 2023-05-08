import * as React from "react"
import "../scss/ImgRender.scss"



const ImgRender = ({img, top, left, width ,height}) => {

  return (
    <img src={img} style={{top:top, left:left, width:width, height:height}} className='img-tablet'/>

  )
}

export default ImgRender
