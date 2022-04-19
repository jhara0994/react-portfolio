import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'

export default function HomePage() {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {

        if (currentPage === 'About') {
            return(
                <div>
                    <About />
                    <Footer />
                </div>
            )
        }

        if (currentPage === 'Portfolio') {
            return(
                <div>
                    <Portfolio />
                    <Footer />
                </div>
            )
        }

        if (currentPage === 'Resume') {
            return(
                <div>
                    <Resume/>
                    <Footer />
                </div>
            )
        }

        return(
            <div>
                <Contact />
                <Footer />
            </div>
        )
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}