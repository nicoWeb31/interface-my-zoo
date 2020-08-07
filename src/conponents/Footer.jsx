import React from 'react';
import Facebook from "../../src/assets/img/fb.png"
import twitter from "../../src/assets/img/twitter.png"
import youtube from "../../src/assets/img/youtube.png"
import {NavLink} from 'react-router-dom';



const Footer = () => (

        <footer className ="bg-primary">
        <div className ="h3 text-white text-center">tout droit reservés Footer</div>
        <div className="row no-gutters align-items-center text-center pt-2">

            <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                    <img src={twitter} alt="twitter" width="75px" />
                </a>

            </div>

            <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                    <img src={Facebook} alt="facebook" width="75px" />
                </a>

            </div>

            <div className="col-3">
                <a href="/" className="d-block" target="_blank">
                    <img src={youtube} alt="youtube" width="100px" />
                </a>

            </div>

            <div className="col-3">
                <NavLink to="/mentionLegale" className="nav-link p-0 m-0 text-white _footerLink" > Mention legale </NavLink>
                <a href="" className="nav-link p-0 m-0 text-white _footerLink" >mailto</a>
            </div>

        </div>
        </footer>

);

export default Footer;