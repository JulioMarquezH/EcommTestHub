import * as React from "react"
import ButtonBase from "./ButtonBase"
import StarReviews from "./StarReviews"
import "../scss/ProductCard.scss"



const ProductCard = ({ product }) => {

    function isNumber(item) {
        return !isNaN(parseFloat(item)) && isFinite(item);  
    }
    const listPointsReviews = product?.tags?.filter((item) => isNumber(item))

    function sumElements(listPointsReviews) {
        let sum = 0;
        for (let i = 0; i < listPointsReviews.length; i++) {
          if (typeof listPointsReviews[i] === 'number') {
            sum += listPointsReviews[i];
          } else if (typeof listPointsReviews[i] === 'string') {
            const numero = parseFloat(listPointsReviews[i]);
            if (!isNaN(numero)) {
              sum += numero;
            }
          }
        }
        
        sum = sum/listPointsReviews.length;
        
        return sum;
      }

  return (
    <div className="product-box">
        <section className='section-product-box'>
            <img src={`${product.featuredImage.url}`} className='img-product' />
            <div className='button-box-product'>
                <ButtonBase type={'button'} style={'secondary'} text={'Add to cart'}/>
            </div>
        </section>

        <p>{product.title}</p>
        <div style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
            <div style={{display:'flex'}}>
                <StarReviews points={sumElements(listPointsReviews)}/>
                <p className='total-points'>{`(${sumElements(listPointsReviews)})`}</p>
            </div>
            <section style={{display:'flex'}}>
                <p className='old-price'>{`€${product.prices.max.amount}`}</p>
                <p className='new-price'>{`€${product.prices.min.amount}`}</p>
            </section>
        </div>
    </div>
  )
}

export default ProductCard
