
import React from 'react';

const Recipe =({ title, calories, img, ingredients }) =>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{Math.floor(calories)}</p>
            <img src={img} alt=""/>
            <ul>
                {ingredients.map((ingredient)=>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ul>
            
        </div>
    )

}

export default Recipe;