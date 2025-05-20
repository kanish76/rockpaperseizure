import { useState } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experiments from './components/Experiments'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      {loaded && (
        <div className="bg-black text-white font-sans transition-opacity duration-1000 ease-in-out">
          <Navbar />
          <Hero />
          <Projects />
          <Experiments />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App

