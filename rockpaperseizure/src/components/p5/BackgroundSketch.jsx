import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function BackgroundSketch() {
  const containerRef = useRef();
  let t = 0;

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(containerRef.current);
      };

      p.draw = () => {
        p.background(15);
        p.noFill();
        p.stroke(255, 0, 255, 100);
        p.strokeWeight(2);

        for (let i = 0; i < 10; i++) {
          p.beginShape();
          for (let x = 0; x < p.width; x += 20) {
            const y = p.noise(x * 0.005, t + i) * p.height;
            p.vertex(x, y);
          }
          p.endShape();
        }

        t += 0.01;
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch);

    // Attach canvas to the container div
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}

