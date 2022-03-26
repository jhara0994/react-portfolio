import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="footer-contacts">
                    <a href="tel:+4042854719" className="contact-info">404-285-4719</a>
                    <a href="mailto: jharalson29@gmail.com?subject=Project Ideas" className="contact-info">jharalson29@gmail.com<i className="fa fa-envelope" aria-hidden="true"></i></a>
                    <a href="https://github.com/jhara0994" className="contact-info">https://www.github.com/jhara0994<i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jared-haralson-179b16123/" className="contact-info">LinkedIn<i className="fab fa-linkedin-in"></i></a>
                </div>
            </footer>
        )

    }
}