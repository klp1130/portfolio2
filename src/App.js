import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

const App = () => {

  return (
    <div id="top" className='app light'>
        <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>  
        <ScrollToTop />
        <Footer />
    </div>
  )
}

export default App;
