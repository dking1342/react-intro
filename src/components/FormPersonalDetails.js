
import React, { Component } from 'react'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const { values, handleChange } = this.props;


        return (
            <>
                <header style={ headerStyles }>
                    <h1>Enter Personal Details</h1>
                </header>

                <form action="">
                    <label htmlFor="occupation">Occupation</label>
                    <input 
                        type="text" 
                        placeholder="Enter your occupation" 
                        id="occupation" 
                        name="occupation"
                        onChange={ handleChange }
                        value = { values.occupation }
                    />
                    <br></br>
                    <label htmlFor="city">City</label>
                    <input 
                        type="text" 
                        placeholder="Enter your city" 
                        id="city" 
                        name="city"
                        onChange={ handleChange }
                        value = { values.city }
                    />
                    <br></br>
                    <label htmlFor="bio">Bio</label>
                    <input 
                        type="bio" 
                        placeholder="Enter your bio" 
                        id="bio" 
                        name="bio"
                        onChange={ handleChange }
                        value = { values.bio }
                    />
                    <br></br>
                    <input
                        id="prevBtn"
                        type="button"
                        value="Back"
                        onClick={ this.back }
                        style = { btnStyles }            
                    />
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



export default FormPersonalDetails


