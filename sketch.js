import Player from "./Player"
import Ball from "./Ball";
export default function (p5) {
    let p1;
    let p2;
    let ball;
    p5.setup = () => {
        p5.createCanvas(window.innerWidth, window.innerHeight);
        p5.initPong()
    }

    p5.initPong = () => {
        p1 = new Player(p5.width / 6, p5.height / 2, p5)
        p2 = new Player(p5.width - (p5.width / 6), p5.height / 2, p5)
        ball = new Ball(p5.width / 2, p5.height / 2, p5);
    }

    p5.board = () => {
        p5.drawingContext.setLineDash([15, 5]);
        p5.background('#000')
        p5.stroke('#fff')
        p5.line(p5.width / 2, 0, p5.width / 2, p5.height);
    }
    p5.draw = () => {
        p5.board();
        p1.draw()
        p2.draw()

        ball.draw(p1,p2);
        if(!ball.game)
            p5.initPong()
    }
}