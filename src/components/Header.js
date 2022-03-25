import React from 'react'

export default class Header {
    render() {
        // let resumeData = this.props.resumeData;
        return (
            <header id="home">
                <h2>Jared Haralson - Web Developer</h2>
                <nav id="nav-container">
                    <ul id="nav">
                        <li className="home-page"><a href="#home">Home</a></li>
                        <li className="about-me"><a href="#about">About Me</a></li>
                        <li className="portfolio"><a href="#portfolio">Portfolio</a></li>
                        <li className="resume"><a href="#resume">Resume</a></li>
                        <li className="contact"><a href="#contact">Contact Me</a></li>
                        <li className="collab"><a href="#collab">Collaborators Corner</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}