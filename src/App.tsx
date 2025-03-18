import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Tools from './components/Tools'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

AOS.init();


import './index.css'


import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <NavBar />
      <Hero/>
      <Experience />
      <Projects />
      <Skills />
      <Tools />
      <About />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default App
