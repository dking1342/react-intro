
import React, { Component } from 'react'
import Counter from './Counter';


class Counters extends Component {

    render() {
        const { onReset, onIncrement, onDecrement, counters, onDelete, onSortAsc, onSortDes } = this.props;
        return (
            <>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={ onReset }>
                    Reset
                </button>
                <button 
                    className="m-2 btn btn-success btn-sm"
                    onClick={ onSortAsc }>
                    Ascending
                </button>
                <button 
                    className="m-2 btn btn-danger btn-sm"
                    onClick={ onSortDes }>
                    Decending
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