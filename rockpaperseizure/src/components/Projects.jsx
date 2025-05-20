export default function Projects() {
  const projects = [
    {
      title: 'Noisy Shapes',
      description: 'An abstract art project using p5.js noise loops.',
      url: 'https://editor.p5js.org/kanish76/full/xxxxxxx'
    },
    {
      title: 'Audio Visualizer',
      description: 'Dynamic visual synced to audio frequencies.',
      url: 'https://editor.p5js.org/kanish76/full/yyyyyyy'
    },
    // Add more here
  ];

  return (
    <section className="py-16 px-8 bg-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-lg p-6 hover:bg-white hover:text-black transition"
          >
            <h3 className="text-2xl mb-2">{p.title}</h3>
            <p className="text-sm">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

