import React from "react";
import { Outlet, Routes } from "react-router-dom";
import "./style.css"

export default function Dashboard() {
    return (
        <section className="dashboard">
            < h1 > I am Home</h1 >
            <Outlet />
            {/* <RouterCarousel /> */}
        </section >
    )
};