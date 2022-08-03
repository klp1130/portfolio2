import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'


const App = () => {

  return (
    <div>
        <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>  
        <Footer />
    </div>
  )
}

export default App;
