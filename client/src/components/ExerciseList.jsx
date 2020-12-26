
import React, { Component } from 'react'
import Exercise from './Exercise';

export class ExerciseList extends Component {
    constructor(props){
        super(props)
        this.state ={
            exercises: []
        }
    }
    async componentDidMount(){
        try {
            const response = await fetch('http://localhost:5000/exercises')
            const data = await response.json();

            this.setState({
                exercises: [...data.payload]
            })
        } catch (error) {
            console.log(error);
            this.setState({
                exercises:[]
            })            
        }
    }

    deleteExercise = async (id) => {
        try {
            await fetch(`http://localhost:5000/exercises/${id}`,{
                method:'DELETE',
                mode:'cors',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({_id: id})
            })
            this.setState({
                exercises: this.state.exercises.filter(exercise=> exercise._id !== id)
            })
    
        } catch (error) {
            console.log(error);
        }
        // window.location='/'
    }

    render() {
        return (
            <>
                <table className="table table-dark text-center">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Exercise</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        <th scope="col">Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.exercises.map(exercise=>(
                                <tr key={exercise._id}>
                                    <Exercise
                                        id={ exercise._id }
                                        username={ exercise.username }
                                        description={ exercise.description }
                                        duration={ exercise.duration }
                                        date={ exercise.date }
                                        onDelete={ this.deleteExercise }
                                    />

                                </tr>
                        ))
                    }
                    </tbody>

                    </table>
            </>
        )
    }
}

export default ExerciseList
