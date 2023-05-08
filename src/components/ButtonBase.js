
import * as React from "react"
import "../scss/ButtonBase.scss"

const ButtonBase = ({ style, text, action = () => {}, type }) => {

  return (
    <button type={type} onClick={(e) => {action()}} className={`button-base button-${style}`}>
        <p className={`button-text-base button-text-${style}`}>{text}</p>
    </button>
  )
}

export default ButtonBase