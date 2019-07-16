import p5 from "p5";

global.p5 = p5;

const sketch = () => {
  setup = () => createCanvas(400, 400);
  draw = () => background(222);
};

new p5(sketch);
