
import * as React from "react"
import "../scss/SendEmail.scss"
import ButtonBase from "./ButtonBase"
import InputBase from "./InputBase"

const SendEmail = () => {

    const actionSubmit = () => {
        console.log("send")
    }

  return (
    <form className='from-send-emial'>
        <div className='box-input-email'>
            <InputBase type={'email'} text={'Yuor Email'} />
        </div>
        <div className='box-button-email'>
            <ButtonBase type={'submit'} style={'primary'} action={actionSubmit} text={'Send'}/>
        </div>
    </form>
  )
}

export default SendEmail