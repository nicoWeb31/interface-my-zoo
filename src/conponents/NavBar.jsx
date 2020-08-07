import React from 'react';
import logo from '../../src/assets/img/logo.png';
import { NavLink } from "react-router-dom"

const NavBar = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo-my-zoo" width='50px' className="rounded" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link" >Acceuil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/animaux" exact className="nav-link" >Animaux</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact className="nav-link" >Contact</NavLink>
                    </li>

                </ul>

            </div>
        </nav>

    </>
);

export default NavBar;

