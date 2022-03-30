import React from 'react'
import Portfolio from './Portfolio'

export default function NavBar ({ currentPage, handlePageChange }) {
        return (
            <header id="home">
                <h2>Jared Haralson - Web Developer</h2>
                <nav id="nav-container">
                    <ul id="nav">
                        <a href="#about" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link-active': 'nav-link'}>
                                ABOUT ME
                        </a>
                        <a href="#portfolio" 
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link-active': 'nav-link'}>
                                PORTFOLIO
                        </a>
                        <a href="#contact" 
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link-active': 'nav-link'}>
                                CONTACT
                        </a>
                        <a href="#resume" 
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link-active': 'nav-link'}>
                                RESUME
                        </a>
                    </ul>
                </nav>
            </header>
        )
}








