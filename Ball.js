export default class Ball {
    constructor(x, y, p5) {
        this.x = x;
        this.y = y;
        this.p5 = p5;
        this.yspeed = Math.random() > 0.5 ? 2 : -2;
        this.xspeed = Math.random() > 0.5 ? 2 : -2;
        this.game = 1;
    }

    draw(p1, p2) {
        this.p5.drawingContext.setLineDash([0, 0]);
        this.p5.rect(this.x, this.y, 15, 15);
        this.setDirection(p1, p2)
        this.x += this.xspeed;
        this.y += this.yspeed;

        if(this.x === 0 || this.x === this.p5.width)
            this.game = 0;
    }

    setDirection(p1, p2) {
        if (this.y === this.p5.height)
            this.yspeed = -this.yspeed
        if (this.y === 0)
            this.yspeed = Math.abs(this.yspeed)

        // player positions
        // for (let player of [p1, p2]) {
        if (this.x === p2.xpos && (this.y > p2.ypos && this.y < (p2.ypos + p2.line)))
            this.xspeed = Math.abs(this.xspeed)
        if (this.x === (p2.xpos - 14) && (this.y > p2.ypos && this.y < (p2.ypos + p2.line)))
            this.xspeed = -this.xspeed
        // }

        if (this.x === p1.xpos && (this.y > p1.ypos && this.y < (p1.ypos + p1.line)))
            this.xspeed = -this.xspeed
        if (this.x === p1.xpos && (this.y > p1.ypos && this.y < (p1.ypos + p1.line)))
            this.xspeed = Math.abs(this.xspeed)
    }
}