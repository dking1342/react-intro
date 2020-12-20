
import React, { Component } from 'react'


class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };

    render() {
        let { id } = this.props.counter;
        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button 
                    className="btn btn-secondary btn-sm" 
                    onClick={ this.handleClick }>
                    Increment
                </button>
                <button 
                    className="btn btn-danger btn-sm m-2" 
                    onClick={ () => this.props.onDelete(id) }>
                    Delete
                </button>
            </div>
        )
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    handleClick = () => {
        this.setState({
            value: this.state.value + 1
        });
    }

}

export default Counter;