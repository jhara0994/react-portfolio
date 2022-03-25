import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'
// import Collaborator from './components/Collab'

function App() {
  return (
    <main className="main">
      <Header className="pageHeader" />
      <About className="aboutContainer" />
      <Portfolio className="projectContainer" />
      <Footer className="footerContainer" />
    </main>
  );
}

export default App;
