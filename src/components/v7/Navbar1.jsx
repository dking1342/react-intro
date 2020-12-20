
import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">Shopping Cart</a>
                <span className="badge-pill badge-secondary badge">{ this.props.totalCounters }</span>   
            </nav>
        )
    }
}

export default Navbar
