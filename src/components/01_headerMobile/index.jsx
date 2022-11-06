import React from 'react';
import './style.css';
import '../../styles/themes.css';
import { NavLink } from 'react-router-dom';

export default function Header({ data }) {
    const { logo, title, pages } = data;
    console.log("pages", pages[0].name)
    return (
        // <header className='bg-glass'>
        <header>
            <h2 className='burger-menu-icon'>Burger Menu</h2>
            <nav>
                {logo ? <img src={logo} alt="" /> : <h2>No logo</h2>}
                {title ? <h2>{title}</h2> : <h2> No Header</h2>}
                <ul>
                    {pages && pages.map(page => {
                        return (
                            <NavLink
                                className="navLink"
                                key={page.name}
                                to={page.path}>
                                {page.name}
                            </NavLink>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
};