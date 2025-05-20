// src/components/Hero.jsx
import BackgroundSketch from './p5/BackgroundSketch'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <BackgroundSketch />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-glitch text-center tracking-wide">
          ROCK PAPER SEIZURE
        </h1>
      </div>
    </section>
  );
}

