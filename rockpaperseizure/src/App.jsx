// src/App.jsx
import { useEffect } from 'react'
import Home from './pages/Home'
import { initSmoothScroll } from './utils/smoothScroll'
import CustomCursor from './components/CustomCursor'

function App() {
  useEffect(() => {
    initSmoothScroll()
  }, [])

  return (
    <>
      <CustomCursor />
      <Home />
    </>
  )
}

export default App
