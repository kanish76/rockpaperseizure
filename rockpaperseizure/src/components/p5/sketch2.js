export default {
  setup(p5) {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.strokeWeight(2);
  },
  draw(p5) {
    p5.background(10);
    p5.stroke(0, 255, 255);
    for (let i = 0; i < p5.width; i += 20) {
      let y = p5.sin(i * 0.01 + p5.frameCount * 0.05) * 100 + p5.height / 2;
      p5.line(i, y, i, p5.height);
    }
  },
};

