
import React, { Component } from 'react'


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <>
                <header style={ headerStyles }>
                    <h1>Enter User Details</h1>
                </header>
                <form action="">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your first name" 
                        id="firstName" 
                        name="firstName"
                        onChange={ handleChange }
                        value = { values.firstName }
                    />
                    <br></br>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your last name" 
                        id="lastName" 
                        name="lastName"
                        onChange={ handleChange }
                        value = { values.lastName }
                    />
                    <br></br>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        id="email" 
                        name="email"
                        onChange={ handleChange }
                        value = { values.email }
                    />
                    <br></br>
                    <input
                        id="nextBtn"
                        type="button"
                        value="Continue"
                        onClick={ this.continue }
                        style = { btnStyles }            
                    />

                </form>
            </>
        )
    }
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

export default FormUserDetails
