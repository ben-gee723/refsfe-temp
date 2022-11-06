import React from 'react';
import './style.css';
import { Outlet, Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from '../../pages/index'

let style = {
    // backgroundColor: "red"
};

export default function Main({ data }) {
    return (
        <main style={style}>
            <Outlet />
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </main>
    )
};