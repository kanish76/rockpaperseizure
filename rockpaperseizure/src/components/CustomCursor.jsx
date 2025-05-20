// src/components/CustomCursor.jsx
import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor")
    window.addEventListener("mousemove", (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }, [])

  return (
    <div
      className="custom-cursor fixed w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{ transition: 'transform 0.1s ease-out' }}
    />
  )
}


