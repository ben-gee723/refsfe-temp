import React from "react";
import { Outlet, Routes } from "react-router-dom";
import RouterCarousel from "../../components/00_templates/RouterCarousel";
import "./style.css"

export default function Home() {
    return (
        <section className="Home">
            < h1 > I am Home</h1 >
            <Outlet />
            {/* <RouterCarousel /> */}
        </section >
    )
};