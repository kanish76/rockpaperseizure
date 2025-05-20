// src/utils/smoothScroll.js
import Lenis from '@studio-freight/lenis'

export const initSmoothScroll = () => {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

