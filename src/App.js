import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main className="main">
      <Navbar className="navContainer" />
      <About className="aboutContainer" />
      <Project className="projectContainer" />
      <Skills className="skillsContainer" />
      <Contact className="contactContainer" />
    </main>
  );
}

export default App;
