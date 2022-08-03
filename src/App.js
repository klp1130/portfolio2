import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
//import ProjectContainer from './components/ProjectContainer/ProjectContainer'

const App = () => {

  return (
    <div>
        <Header />
      <main>
        <About />
        <Contact />
      </main>  
        <Footer />
    </div>
  )
}

export default App;
