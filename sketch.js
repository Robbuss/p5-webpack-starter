export default function(p5) {
  p5.drawBg = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      p5.background(40);
      p5.stroke(200);
      p5.strokeWeight(3);
  }
  p5.drawPoint = (x, y) => {
      p5.stroke('blue')
      p5.strokeWeight((Math.random() * 10) * p5.PI)
      p5.point(x, y)
  }
  p5.setup = () => {
      p5.drawBg()
  }
  p5.draw = () => {
      p5.drawPoint(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
  }
}