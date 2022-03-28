import React, { Component } from 'react'
import Resume from '../images/Resume.pdf'
export default class Header extends Component {
    render() {
        // let resumeData = this.props.resumeData;
        return (
            <header id="home">
                <h2>Jared Haralson - Web Developer</h2>
                <nav id="nav-container">
                    <ul id="nav">
                        <a href="#home">Home</a>
                        <a href="#about">About Me</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href={Resume}>Resume</a>
                        <a href="#contact">Contact Me</a>
                    </ul>
                </nav>
            </header>
        )
    }
}