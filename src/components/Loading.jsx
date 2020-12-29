
import React from 'react';
import './../loading.css';

const Loading = () => {
    return (
        <div className='loading'>
            <h1>Loading...</h1>
            <svg id="svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id='loadingGradient' gradientTransform="rotate(85)">
                    <stop offset="20%"  stopColor="#1db4d4" />
                    <stop offset="40%"  stopColor="#246fb4" />
                    <stop offset="60%"  stopColor="#100ab6" />
                    <stop offset="80%" stopColor="#130976" />
                    <stop offset="100%" stopColor="#110240" />
                </linearGradient>

                <circle id="loader" cx="250" cy="250" r="200" fill="none" stroke="url('#loadingGradient')" strokeWidth="40"  strokeLinecap="round"/>
            </svg>

            
        </div>
    )
}

export default Loading
