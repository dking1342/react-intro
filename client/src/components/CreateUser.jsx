
import React, { Component } from 'react'

export class CreateUser extends Component {
    constructor(props){
        super(props);

        this.state={
            username:'',
        }
    }

    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username
        }
        await fetch('http://localhost:5000/users/add',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(user)
        })

        this.setState({
            username:'',
        })
    }

    render() {
        return (
            <>
                <h3>Create New User</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={ this.state.username }
                            onChange={ this.onChangeUsername }
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>
                    </div>
                </form>    
            </>
        )
    }
}

export default CreateUser
