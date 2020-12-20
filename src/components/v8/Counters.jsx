
import React, { Component } from 'react'
import Counter from './Counter';


class Counters extends Component {

    render() {
        const { onReset, onIncrement, counters, onDelete } = this.props;
        return (
            <>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={ onReset }>
                    Reset
                </button>
                { counters.map(counter=> 
                    <Counter 
                        key={ counter.id } 
                        onDelete={ onDelete }
                        onIncrement={ onIncrement } 
                        counter={ counter }
                        
                    />
                )}
            </>
        )
    }
}

export default Counters;