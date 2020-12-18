
import React from 'react'

const Confirm = ( props ) => {
    const next = e => {
        e.preventDefault();
        // process form //
        props.nextStep();
    }
    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const { values } = props;

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
                <h1>Confirm Details</h1>
            </header>
            <ul>
                <li>
                    <span>First Name:</span>  <span>{ values.firstName }</span>
                </li>
                <li>
                    <span>Last Name:</span>  <span>{ values.lastName }</span>
                </li>
                <li>
                    <span>Email:</span>  <span>{ values.email }</span>
                </li>
                <li>
                    <span>Occupation:</span>  <span>{ values.occupation }</span>
                </li>
                <li>
                    <span>City:</span>  <span>{ values.city }</span>
                </li>
                <li>
                    <span>Bio:</span>  <span>{ values.bio }</span>
                </li>
            </ul>

            <button style={ btnStyles } onClick={ back }>Back</button>
            <button style={ btnStyles } onClick={ next }>Confirm</button>

        </>
    )
}

export default Confirm



