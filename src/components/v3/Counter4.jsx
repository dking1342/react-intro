
import React, { Component } from 'react'


class Counter extends Component {
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    state = {
        count: 0,
    };

    render() {

        return (
            <>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button onClick={ this.handleIncrement }>Test</button>
            </>
        )
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    handleIncrement(){
        console.log('clicked', this.state);
        this.setState({
            count: this.state.count + 1
        })
    }






}

export default Counter;