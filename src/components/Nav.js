
import React from 'react';

import { Link } from 'react-router-dom';



const Nav = () => {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to='/about' className='nav-item'>
                    <li>About</li>
                </Link>
                <Link to='/shop' className='nav-item'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;