
import * as React from "react"
import "../scss/InputBase.scss"

const InputBase = ({ type, text}) => {

  return (
    <input type={type} className={`input-base`} placeholder={text}/>
  )
}

export default InputBase