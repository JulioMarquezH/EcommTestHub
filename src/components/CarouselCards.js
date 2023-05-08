
import React, { useEffect, useState, useMemo } from 'react'
import "../scss/CarouselCards.scss"
import ProductCard from './ProductCard'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmountRigth, resetRigth } from "../feature/carousel/carouselRigth"
import { resetLeft } from "../feature/carousel/carouselLeft"
import { incrementByAmountCount } from '../feature/carousel/carouselCount';


const CarouselCards = () => {
    // useState
    const [products, setProducts ] = useState ([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const [end, setEnd] = useState()
    // recolectando data del redux
    const positionLeft = useSelector((state) => state.productCarouselLeftReducer.value)
    const positionRigth = useSelector((state) => state.productCarouselRigthReducer.value)
    const productCount = useSelector((state) => state.productCarouselCountReducer.value)
    const dispatch = useDispatch()

    // funcion para reiniciar las posiciones del carrusel
    const resetState = () => {
        dispatch(resetRigth())
        dispatch(resetLeft())
    }

    // traer los productos
    useEffect(()=> {
       getProducts()
    },[])

    // ejecutar funcion cuando cambie de ancho la pantalla
    useEffect(()=> {
        determineScreenSize()
    },[screenWidth])

    // activar el evento de escuchar ancho de pantalla
    useEffect(() => {
        // funcion para guardar el estado del ancho de patalla
        const handleResize = () => {
          setScreenWidth(window.innerWidth)
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);

    // funcion para determinar cuantos productos mostrar
    const determineScreenSize = () =>{
        if (screenWidth > 1800) {
            resetState()
            dispatch(incrementByAmountRigth(4))
          } else if (screenWidth > 1400) {
            resetState()
            dispatch(incrementByAmountRigth(3))
          } else if(screenWidth > 900) {
            resetState()
            dispatch(incrementByAmountRigth(2))
          } else if (screenWidth > 300) {
            resetState()
            dispatch(incrementByAmountRigth(1))
          }
    }

    // funcion para traer los productos
    const getProducts = async () => {
        await fetch('https://gradistore-spi.herokuapp.com/products/all')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setProducts(data?.products?.nodes);
                dispatch(incrementByAmountCount(data?.products?.nodes?.length))
                determineScreenSize()
            })
            .catch(error => {
                console.error(error);
            });
    }

    const positionEnd = () =>{
        if (positionRigth !== 0){
          return positionRigth
        }
        if (screenWidth > 1800) {
          return 4;
        }
        if (screenWidth > 1400) {
          return 3;
        } 
        if(screenWidth > 900) {
          return 2;
        } 
        return 1;
    }

    const end = positionEnd();

    return(
        <div id={products.length == 0 ? 'load-style' : 'none'} className='div-box box-carousel'>
            {products.length > 0 ? (products?.slice(positionLeft, end)?.map((item) => { return (<ProductCard product={item} />) })) : <CircularProgress />}
        </div>
    )
}

export default CarouselCards

