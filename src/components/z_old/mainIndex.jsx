import React from 'react';
import './style.css';
import { Outlet, Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages/index'

export default function Main({ pages }) {

    // Another way of making this more automared?
    let elements = [<Home />, <About />, <Contact />];
    pages.forEach((page, i) => {
        page.element = elements[i];
        return page;
    })

    return (
        <main>
            <Outlet />
            <Routes>
                {pages && pages.map(page => {
                    return (
                        <Route
                            key={page.name}
                            path={page.path}
                            element={page.element}
                        />)
                })}
            </Routes>
        </main>
    )
};