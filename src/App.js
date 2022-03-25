import './App.css';
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Collaborator from './components/Collab'

function App() {
  return (
    <main className="main">
      <Header className="pageHeader" />
      <About className="aboutContainer" />
      <Portfolio className="projectContainer" />
      <Collaborator className="contactContainer" />
    </main>
  );
}

export default App;
