import { useEffect } from "react";
import Sketch from "react-p5";

// Import all your sketches statically
import BackgroundSketch from "../p5/BackgroundSketch.jsx";
import Sketch2 from "../p5/Sketch2.js";
// Add more sketches here as you create them

// Map file names to the imported sketch modules
const sketches = {
  BackgroundSketch,
  Sketch2,
  // Add more mappings here
};

export default function ExperimentViewer({ file, onClose }) {
  const sketchModule = sketches[file];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!sketchModule) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center">
        <p>Sketch not found: {file}</p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded"
      >
        Close
      </button>
      <Sketch setup={sketchModule.setup} draw={sketchModule.draw} />
    </div>
  );
}

