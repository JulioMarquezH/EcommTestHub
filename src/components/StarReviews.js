import * as React from "react"
import StarIcon from "./StarIcon"


const StarReviews = ( {points} ) => {
    
    function stars(points) {
        const componente = []
        for (let index = 0; index <= 4; index++) {
            componente.push(
                <div> 
                    {
                        points/100 > index ? <StarIcon style={'full'}/> : <StarIcon style={'empty'}/>
                    }
                </div>    
            )
        }
        return componente;
    }

    return (
        stars(points)
    )
}

export default StarReviews