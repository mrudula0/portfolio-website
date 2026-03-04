import { Routes, Route } from 'react-router-dom';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import './App.scss';

import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import particlesConfig from './utils.js/particles';

function App() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="app">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="particles"
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
