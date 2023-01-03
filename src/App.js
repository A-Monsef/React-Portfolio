import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import ParticlesBackground from './components/config/ParticlesBackground';
import Skills from './components/experience/Experience';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <header>
        <ParticlesBackground />
        <NavBar />
        <Hero />
      </header>
      <main>
        <About />
      </main>
      <Skills />
      <Portfolio />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
