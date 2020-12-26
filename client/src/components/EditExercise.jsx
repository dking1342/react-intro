
import React, { Component } from 'react'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class EditExercise extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            username:'',
            description:'',
            duration:0,
            date:new Date(),
            users:[],
        }
    }

    async componentDidMount(){
        const response = await fetch(`http://localhost:5000/exercises/${this.state.id}`)
        const data = await response.json();

        await fetch('http://localhost:5000/users');

        this.setState({
            username: data.payload.username,
            description: data.payload.description,
            duration: data.payload.duration,
            date: new Date(data.payload.date),
        })
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

        await fetch(`http://localhost:5000/exercises/${this.state.id}`,{
            method:'PUT',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(exercise)
        })

        window.location='/'
        
    }



    render() {
        return (
            <>
                <h3>Edit Exercise Log</h3>
                <form action="" onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>  
                        <input 
                            required
                            type="text"
                            className="form-control"
                            value={ this.state.username }
                            onChange={ this.onChangeUsername }
                        
                        />  
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
                        <input type="submit" value="Edit Exercise Log" className="btn btn-primary"/>
                    </div>
                </form>   
            </>
        )
    }
}

export default EditExercise
