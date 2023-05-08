import * as React from "react"
import "../scss/StarIcon.scss"

const StarIcon = ( {style} ) => {

  return (
    <span>
        <svg 
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 21 20" mlns="http://www.w3.org/2000/svg">
            <path 
                d="M10.3011 0L12.7033 7.39322H20.477L14.188 11.9625L16.5902 19.3557L10.3011 14.7864L4.01208 19.3557L6.41429 11.9625L0.125237 7.39322H7.89893L10.3011 0Z" 
                className={`path-star-icon-${style}`}
            />
        </svg>
    </span>
  )
}

export default StarIcon