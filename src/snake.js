export default function Snake(p5, scl) {
    // set up the snakes variables
    this.x = p5.width / 2;
    this.y = p5.height / 5;
    this.xspeed = 0;
    this.yspeed = 1;
    this.total = 2;
    this.tail = [p5.createVector(this.x, this.y + scl), p5.createVector(this.x, this.y + scl + scl)];

    // snake can eat something and grow 
    this.eat = (pos) => {
        if (p5.dist(this.x, this.y, pos.x, pos.y) < 1) {
            this.total++;
            return true;
        }
        return false;
    }

    // set the direction of the snake, prevention of dieing from pressing opposite direction button
    this.dir = (x, y) => {
        if (Math.abs(this.xspeed - x) != 2)
            this.xspeed = x;
        if (Math.abs(this.yspeed - y) != 2)
            this.yspeed = y;
    }

    // Checks if the snake dies, if so reset the gameSpeed and the Score
    this.death = () => {
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            if (p5.dist(this.x, this.y, pos.x, pos.y) < 1) {
                this.die();
                return false;
            }
        }
        return true;
    }

    this.die = () => {
        // reset snake position and speed
        this.x = p5.width / 2;
        this.y = p5.height / 2;
        this.xspeed = 0;
        this.yspeed = 1;

        // reset the total count and the snake's tail
        this.total = 2;
        this.tail = [p5.createVector(this.x, this.y + scl), p5.createVector(this.x, this.y + scl + scl)];
    }

    // update the snake, draw the tail 
    this.update = () => {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = p5.createVector(this.x, this.y);
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = p5.constrain(this.x, 0, p5.width - scl);
        this.y = p5.constrain(this.y, 0, p5.height - scl);
    }

    // show the snake 
    this.show = () => {
        p5.stroke(0, 100, 0);
        p5.fill(89, 152, 47);
        for (let i = 0; i < this.total; i++) {
            p5.rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        p5.rect(this.x, this.y, scl, scl);
    }
}