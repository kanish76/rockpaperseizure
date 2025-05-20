// src/pages/Home.jsx
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.from(".hero", {
      opacity: 0,
      y: 80,
      duration: 1.5,
      ease: "power4.out",
    })

    gsap.utils.toArray(".project").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
      })
    })
  }, [])

  return (
    <div className="bg-black text-white min-h-screen px-10 py-20 space-y-32">
      <section className="hero text-6xl font-bold">
        <h1>Rock Paper Seizure</h1>
        <p className="text-lg mt-4 text-gray-400">Creative portfolio of absurd finesse</p>
      </section>

      <section className="projects grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="project bg-white text-black p-10 rounded-2xl hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold">Project One</h2>
        </div>
        <div className="project bg-white text-black p-10 rounded-2xl hover:scale-105 transition-transform">
          <h2 className="text-2xl font-bold">Project Two</h2>
        </div>
      </section>

      <section className="about text-center">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          RockPaperSeizure is a chaotic, visual-centric design portfolio that reflects edgy creativity and motion.
        </p>
      </section>

      <section className="contact text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400">Email me at seizure@rockpaper.design</p>
      </section>
    </div>
  )
}
