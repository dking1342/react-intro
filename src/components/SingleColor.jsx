import React, { useState, useEffect } from 'react'
import rgbToHex from './../utils';

const SingleColor = ({ color, index, hexColor }) => {
    const [alert, setAlert]=useState(false);

    const { rgb, weight } = color;

    // alternative way to display hex color
    let bcg = rgb.join(',');
    let hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

    const handleClick = (e) => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }
    
    useEffect(()=>{
        const timeout = setTimeout(() => {setAlert(false)}, 3000);
        return ()=> clearTimeout(timeout)
    },[alert])
    
    return (
        <article onClick={ handleClick } className={ `color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})`}}>
            <p className="percent-value">{ weight }%</p>
            <p className="color-value">{ hexValue }</p>
            {
                alert && <p className="alert">copied to clipboard</p>
            }
        </article>

    )
}

export default SingleColor
