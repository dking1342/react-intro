
import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class CreateExercise extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:5000/users')
        const data = await response.json();

        if(data.payload.length > 0){
            this.setState({
                users: data.payload
                    .map(user=>user.username)
                    .sort(),
                username:data.payload[0].username
            })
        }
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    onChangeDuration = (e) => {
        this.setState({
            duration: e.target.value
        })
    }
    onChangeDate = (date) => {
        this.setState({
            date: date
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        await fetch('http://localhost:5000/exercises/add',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(exercise)
        })

        const response = await fetch('http://localhost:5000/users')
        const data = await response.json();

        if(data.payload.length > 0){
            this.setState({
                username:data.payload[0].username,
                description:'',
                duration:0,
                date: new Date(),
                users: data.payload
                    .map(user=>user.username)
                    .sort(),
            })
        }
        
    }

    

    render() {
        return (
            <>
                <h3>Create New Exercise Log</h3>
                <form action="" onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>    
                        <select 
                            required
                            className="form-control"
                            value={ this.state.username }
                            onChange={ this.onChangeUsername }>
                                {
                                    this.state.users.map(user=>(
                                        <option 
                                            key={ user }
                                            value={ user }>{ user }
                                        </option>
                                    )) 
                                 }
                        </select>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={ this.state.description } 
                            onChange={ this.onChangeDescription } 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration (in minutes):</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={ this.state.duration }
                            onChange={ this.onChangeDuration }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <div>
                            <DatePicker 
                                selected={ this.state.date }
                                onChange={ this.onChangeDate }
                            
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                    </div>
                </form>   
            </>
        )
    }
}

export default CreateExercise
