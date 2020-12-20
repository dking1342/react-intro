
import React, { Component } from 'react'


class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    // component level styles
    // put in the element as <el style={ this.styles}></el>
    styles = {
        fontSize: 10,
        fontWeight: 'bold',
    }

    render() {

        return (
            <>
                <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
                <button className="btn btn-secondary btn-sm" onClick={ this.handleClick }>Increment</button>                
                <ul>
                    {this.state.tags.map((tag, i)=>(
                        <li key={ i }>{ tag }</li>
                    ))}
                </ul>
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

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        });
    }



}

export default Counter;