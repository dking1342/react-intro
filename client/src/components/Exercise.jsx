
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';


export class Exercise extends Component {
    constructor(props){
        super(props)
        this.state={
            username: this.props.username,
            description: this.props.description,
            duration: this.props.duration,
            date: moment(this.props.date).format('MM/DD/YYYY'),
            id: this.props.id,
        }
    }
    render() {
        return (
            <>
                <td>{ this.state.username }</td>
                <td>{ this.state.description }</td>
                <td>{ this.state.duration }</td>
                <td>{ this.state.date }</td>
                <td>
                    <Link to={ `/edit/${this.state.id}` } >Edit</Link>
                    <span>  </span> | <span>  </span>
                    <button className="btn btn-danger" onClick={ ()=> this.props.onDelete(this.state.id) }>Delete</button>
                </td>                
            </>
        )
    }
}

export default Exercise
