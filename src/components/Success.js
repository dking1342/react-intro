
import React from 'react'

const Success = (props) => {

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }


    const btnStyles = {
        background:'#333',
        color:'#eee',
        border:'none',
        outline:'none',
        borderRadius:'5px',
        cursor:'pointer',
        padding:'10px 20px',
        fontFamily:'inherit'
    }
    const headerStyles = {
        display:'block',
        width:'100vw',
        height:'50px',
        textAlign:'center',
        background:'skyblue',
        color:'#eee',
    }


    return (
        <>
            <header style={ headerStyles }>
                <h1>Success</h1>
            </header>
            <h1>Thank you for your submission</h1>
            <p>You will get an email with further instructions</p>
            <button style={ btnStyles } onClick={ back }>Back</button>

        </>
    )
}


export default Success;