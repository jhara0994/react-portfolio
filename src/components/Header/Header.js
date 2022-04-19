import React from 'react'
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    Link,
    matchRoutes,
} from "react-router-dom"
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <Router>
            <NavBar />
            {/* <MenuLink
                activeOnlyWhenExact={true}
                to='/'
                label="About"
            /> */}
            <Routes>
                <Route exact path="/" element={<Navigate replace to="/about" />} />  
                <Route path='/about' component={About} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/contact' component={Contact} />
                <Route path='/resume' component={Resume} />
            </Routes>
        </Router>
    )
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = matchRoutes({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
        {match && "> "}
        <Link to={to}>{label}</Link>
      </div>
    );
  }