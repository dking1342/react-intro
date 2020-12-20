
import React, { Component } from 'react'
import Counter from '../Counter';


class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }

    handleDelete = (id) => {
        this.setState({
            counters: this.state.counters.filter(counter=> counter.id !== id)
        })        
    }

    handleReset = () => {
        const counters = this.state.counters.map(counter=> {
            counter.value = 0;
            return counter;
        })
        this.setState({
            counters: counters
        })
    }

    render() {
        return (
            <>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={ this.handleReset }>
                    Reset
                </button>
                { this.state.counters.map(counter=> 
                    <Counter 
                        key={ counter.id } 
                        onDelete={ this.handleDelete } 
                        counter={ counter }
                        
                    />
                )}
            </>
        )
    }
}

export default Counters;