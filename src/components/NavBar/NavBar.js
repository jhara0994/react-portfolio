import React from 'react'
import style from './NavBar.module.css'

export default function NavBar ({ currentPage, handlePageChange }) {
        return (
            <header class={style.header} id="home">
                <h2>Jared Haralson - Full Stack Developer</h2>
                <nav id="nav-container">
                    <ul class={style.nav} id="nav">
                        <a href="#about" 
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? `${style.navLinkActive}`: 'nav-link'}>
                                ABOUT ME
                        </a>
                        <a href="#portfolio" 
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? `${style.navLinkActive}`: 'nav-link'}>
                                PORTFOLIO
                        </a>
                        <a href="#contact" 
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? `${style.navLinkActive}`: 'nav-link'}>
                                CONTACT
                        </a>
                        <a href="#resume" 
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? `${style.navLinkActive}`: 'nav-link'}>
                                RESUME
                        </a>
                    </ul>
                </nav>
            </header>
        )
}








