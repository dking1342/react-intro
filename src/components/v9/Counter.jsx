
import React, { Component } from 'react'


class Counter extends Component {
    componentDidUpdate(prevProps, prevState){
        // console.log('prevState',prevState);
        if(prevProps.counter.value !== this.props.counter.value){
            // ajax call and get the new data from the server
            console.log('prevProps',prevProps);
        }
    }

    componentWillUnmount(){
        // can clean up any timers, pending actions before element is removed
        console.log('counter unmount lifecycle hook');
    }

    render() {
        console.log('counter render lifecycle hook');
        return (
            <div>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button 
                    className="btn btn-secondary btn-sm m-1" 
                    onClick={ () => this.props.onDecrement(this.props.counter) }>
                    -
                </button>
                <button 
                    className="btn btn-secondary btn-sm m-1" 
                    onClick={ () => this.props.onIncrement(this.props.counter) }>
                    +
                </button>
                <button 
                    className="btn btn-danger btn-sm m-2" 
                    onClick={ () => this.props.onDelete(this.props.counter.id) }>
                    Delete
                </button>
            </div>
        )
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 w-25 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }


}

export default Counter;