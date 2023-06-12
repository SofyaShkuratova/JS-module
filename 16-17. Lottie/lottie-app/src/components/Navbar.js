import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary mb-4">
        <div className="navbar-brand">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    to="/"
                    className="nav-link"

                >
                    Главная
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="/about"
                    className="nav-link"
                >
                    О нас
                </NavLink>
            </li>
        </ul>
    </nav>
)