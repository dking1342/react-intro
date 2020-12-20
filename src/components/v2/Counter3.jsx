
import React, { Component } from 'react'


class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map((tag, i)=> <li key={ i }>{ tag }</li> )}</ul>
    }

    render() {

        return (
            <>
                { this.state.tags.length === 0 && 'Add to list' }
                { this.renderTags() }
            </>
        )
    }





}

export default Counter;