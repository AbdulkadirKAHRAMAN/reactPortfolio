import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HeroGeometric from './components/HeroGeometric.jsx';
import ParticlesBackground from './components/particles-background.jsx';
import Navbar from './components/NavBar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Work from './components/Work.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='home' >
          <Navbar />  
      </div>
      <div>
        <HeroGeometric/>
        <AboutMe />
        <Gallery/>
        <Contact />

      </div>
    </>
  )
}

export default App
