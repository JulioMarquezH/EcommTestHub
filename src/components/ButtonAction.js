
import * as React from "react"
import "../scss/ButtonAction.scss"

const ButtonAction = ({icon, action = () => {}}) => {

  return (
    <div className='button-box'>
        <span className="pink-bar"></span>
        <button onClick={() => action()} className='button-carousel'>{icon()}</button>
    </div>
  )
}

export default ButtonAction