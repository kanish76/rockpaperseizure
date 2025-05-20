import { useState } from "react";
import BackgroundSketch from "./p5/BackgroundSketch.jsx";

export default function Experiments() {
  const [activeSketch, setActiveSketch] = useState(null);

  const experiments = [
    { title: "Wave Tunnel", file: "sketch1" },
    { title: "Glitch Field", file: "sketch2" },
    // Add more sketches and files here
  ];

  return (
    <section className="py-16 px-8 bg-black text-white relative">
      <h2 className="text-4xl font-bold mb-12 text-center">Experiments</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiments.map((exp, index) => (
          <button
            key={index}
            onClick={() => setActiveSketch(exp.file)}
            className="border border-white p-6 rounded hover:bg-white hover:text-black transition"
          >
            <h3 className="text-2xl mb-2">{exp.title}</h3>
            <p className="text-sm">Click to explore</p>
          </button>
        ))}
      </div>

      {activeSketch && (
        <ExperimentViewer
          file={activeSketch}
          onClose={() => setActiveSketch(null)}
        />
      )}
    </section>
  );
}

