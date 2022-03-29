import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
} from "react-router-dom"
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Resume from './Resume'
import NavBar from './NavBar'

export default function Header() {
    return (
        <React.Fragment>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate replace to="/about" />} />  
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
            </Routes>
        </Router>
        </React.Fragment>
    )
}