
import React, { Component } from 'react'
import Counter from './Counter';


class Counters extends Component {

    render() {
        console.log('counters render lifecycle hook');

        const { onReset, onIncrement, onDecrement, counters, onDelete } = this.props;
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
                        onDecrement={ onDecrement }
                        counter={ counter }
                        
                    />
                )}
            </>
        )
    }
}

export default Counters;