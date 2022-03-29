import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



export default function NavBar () {
        return (
            <header id="home">
                <h2>Jared Haralson - Web Developer</h2>
                <div id="nav-container">
                    <NavLink
                        activeClassName="navbar_link--active"
                        className="navbar__link"
                        to="/about">
                            About
                    </NavLink>
                    <NavLink
                        activeClassName="navbar_link--active"
                        className="navbar__link"
                        to="/portfolio">
                            Portfolio
                    </NavLink>
                    <NavLink
                        activeClassName="navbar_link--active"
                        className="navbar__link"
                        to="/contact">
                            Contact ME
                    </NavLink>
                    <NavLink
                        activeClassName="navbar_link--active"
                        className="navbar__link"
                        to="/resume">
                            Resume
                    </NavLink>
                </div>
            </header>
        )
}








{/* <ul id="nav">
    <a href="#home" className="nav-option">Home</a>
    <a href="#about" id="about-option">About Me</a>
    <a href="#portfolio" id="portfolio-option">Portfolio</a>
    <a href={Resume} id="resume-option">Resume</a>
    <a href="#contact" id="contact-option">Contact Me</a>
</ul> */}