
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

    // this will create props children in the Counter component
    render() {
        return (
            <>
                { this.state.counters.map(counter=> 
                    <Counter key={ counter.id } value={ counter.value }>
                        <h3>Counter #{ counter.id }</h3> 

                    </Counter> 
                 
                )}
            </>
        )
    }
}

export default Counters;