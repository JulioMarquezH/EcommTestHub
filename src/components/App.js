import * as React from "react"
import CarouselCards from "../components/CarouselCards"
import ButtonBase from "../components/ButtonBase"
import SubTitle from "../components/SubTitle"
import Footer from "../components/Footer"
import SendEmail from "../components/SendEmail"
import Head from "../components/Head"
import Title from "../components/Title"
import CarouselButtons from "../components/CarouselButtons"
import "../scss/Index.scss"
import FooterDecoration from "./FooterDecoration"
import ImgRender from "./ImgRender"
import tabletFive from '../img/tabletFive.png'
import tabletFour from '../img/tabletFour.png'
import tabletThree from '../img/tabletThree.png'
import tabletTwo from '../img/tabletTwo.png'
import tabletOne from '../img/tabletOne.png'




const App = () => {



  return (
    <>
        <Head/>
        <main className='main-container'>
            <div className='div-box'>
                <Title className='box-title'></Title>
                <CarouselButtons/>
            </div>
            <CarouselCards/>
            <div className='box-button'>
                <ButtonBase type={'button'} style={'primary'} text={'Browse all products'}/>
            </div>
            <SubTitle/>
            <Footer/>
            <SendEmail/>
        </main>
        <span className='light-blue-bar'></span>
        <FooterDecoration/>
        <ImgRender 
          img={tabletFive} 
          top={'72.76%'} 
          left={'7.5%'} 
          width={'2.64vw'} 
          height={'2.64vw'} 
        />
        <ImgRender 
          img={tabletThree} 
          top={'84.90%'} 
          left={'5.36%'} 
          width={'3.85vw'} 
          height={'5.57vw'} 
        />
        <ImgRender 
          img={tabletFour} 
          top={'74.83%'} 
          left={'21.79%'} 
          width={'3.57vw'} 
          height={'3.57vw'}
        />
        <ImgRender 
          img={tabletTwo} 
          top={'72.90%'} 
          left={'93.71%'} 
          width={'5.14vw'} 
          height={'4.85vw'} 
        />
        <ImgRender 
          img={tabletOne} 
          top={'86.55%'} 
          left={'85.29%'} 
          width={'3.5vw'} 
          height={'2.29vw'} 
        />
    </>
  )
}

export default App
