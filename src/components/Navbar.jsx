import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

const Navbar = () => {
    const [sidebar, setSidebar]=useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <nav className="nav-navbar">
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaBars onClick={ showSidebar } />
                    </Link>
                </div>
                <aside className={ sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <FaTimes onClick={showSidebar }/>
                            </Link>
                        </li>
                        {
                            SidebarData.map((item,index)=>{
                                const { title, path, icon, cName } = item;
                                return(
                                    <li key={ index } className={ cName }>
                                        <Link to={ path } onClick={ showSidebar }>
                                            {icon} <span>{title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </aside>
            </nav>
        </IconContext.Provider>
    </>
    )
}

export default Navbar
