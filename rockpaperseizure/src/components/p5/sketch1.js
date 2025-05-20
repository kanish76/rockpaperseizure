export default {
  setup(p5) {
    // Note: We create the canvas inside SketchRenderer and attach it to a parent container.
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
  },
  draw(p5) {
    p5.background(0);
    for (let i = 0; i < 200; i++) {
      let x = p5.noise(i * 0.01, p5.frameCount * 0.01) * p5.width;
      let y = p5.noise(i * 0.02, p5.frameCount * 0.02) * p5.height;
      p5.fill(255, 0, 255, 150);
      p5.ellipse(x, y, 5);
    }
  },
};

