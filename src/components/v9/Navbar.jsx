
import React from 'react';


const Navbar = ({ totalCounters }) => {
    console.log('navbar render lifecycle hook');

    return (
        <nav className="navbar navbar-light bg-light">
            <a href="#" className="navbar-brand">Shopping Cart</a>
            <span className="badge-pill badge-secondary badge">{ totalCounters }</span>   
        </nav>
    )
}

export default Navbar
