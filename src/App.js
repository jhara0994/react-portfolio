import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
// import Skills from './components/Skills'
import Collaborator from './components/Collab'

function App() {
  return (
    <main className="main">
      <Navbar className="navContainer" />
      <About className="aboutContainer" />
      <Work className="projectContainer" />
      {/* <Skills className="skillsContainer" /> */}
      <Collaborator className="contactContainer" />
    </main>
  );
}

export default App;
