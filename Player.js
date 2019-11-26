export default class Player {
    constructor(x, y, p5) {
        this.xpos = x;
        this.ypos = y;
        this.p5 = p5;
        this.line = 45
        this.movespeed = 3
    }

    draw() {
        this.p5.drawingContext.setLineDash([0, 0]);
        this.p5.strokeWeight(10)
        this.p5.line(this.xpos, this.ypos, this.xpos, this.ypos + this.line)
        this.p5.strokeWeight(2);
        this.p5.drawingContext.setLineDash([15, 8]);
        if (this.p5.keyIsDown(this.p5.UP_ARROW) && (this.ypos > 6))
            this.ypos -= this.movespeed
        if (this.p5.keyIsDown(this.p5.DOWN_ARROW) && this.ypos < (this.p5.height - this.line + 10))
            this.ypos += this.movespeed
    }
}