import React from "react"
import { NavLink, Outlet, Routes, Route } from 'react-router-dom';
import { Slide1, Slide2, Slide3 } from "./slides/index";
import "./style.css";

export default function RouterCarousel() {
    return (
        <section className="carousel">
            <NavLink className="navLink" to="/">Slide 1</NavLink>
            <NavLink className="navLink" to="slide2">Slide 2</NavLink>
            <NavLink className="navLink" to="slide3">Slide 3</NavLink>
            <Outlet />
            <Routes>
                <Route path='/' element={<Slide1 />} />
                <Route path='slide2' element={<Slide2 />} />
                <Route path='slide3' element={<Slide3 />} />
            </Routes>
        </section>
    )
};