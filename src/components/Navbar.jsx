import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src={ logo } alt="cocktail db logo" className="logo" style={{ height:80,width:80 }}/>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            about
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
