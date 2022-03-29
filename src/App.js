import React, { Component } from 'react'
import './App.css';
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <main className="main">
      <Header className="pageHeader" />
      <About className="aboutContainer" />
      <Portfolio className="projectContainer" />
      <Resume className="resumeContainer" />
      <Contact className="contactContainer" />
      <Footer className="footerContainer" />
    </main>
  );
}

export default App;
