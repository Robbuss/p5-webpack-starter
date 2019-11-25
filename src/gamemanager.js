export default function GameManager(p5, scl) {
    this.state = true; // a boolean that controls the framerate
    this.score = 0;
    this.gameSpeed = 10;
    this.level = 100; // at each multiple of this points, the gameSpeed goes up., so after 10x food of 10 points at a 100
    this.currentLevel = 1;

    // show the Your score element
    this.scoreDisplay = p5.createP('Your score: ' + this.score).class('score');
    this.scoreDisplay.position(5, -15);
    // show the level element
    this.levelDisplay = p5.createP('Level: ' + this.currentLevel).class('score');
    this.levelDisplay.position(p5.width - 100, -15);

    // create pause element
    this.pause = p5.createDiv('Paused, press ESC to continue').hide().class('score');
    this.pause.position(p5.width / 4, p5.height / 2);

    this.updateScore = (score) => {
        this.scoreDisplay.html('Your score: ' + this.score);
        this.changeGameSpeed(this.score);
    }

    this.updateLevel = () => {
        this.levelDisplay.html('Level: ' + this.currentLevel);
    }

    this.changeGameSpeed = (score) => {
        if (this.score === 0) {
            this.gameSpeed = 10;
            p5.frameRate(this.gameSpeed);
        }

        // at each 'this.level' points, the player reached a new level. We increase the speed a little bit
        if (this.score != 0 && this.score % this.level === 0 && this.gameSpeed < 60) {
            this.gameSpeed = this.gameSpeed + 5;
            p5.frameRate(this.gameSpeed);
            this.currentLevel = this.currentLevel + 1;
            this.updateLevel();
        }
    }

    this.pausePlay = () => {
        this.state = !this.state;
        if (this.state) {
            p5.frameRate(this.gameSpeed)
            this.pause.hide()
        } else {
            this.pause.show()
            p5.frameRate(0)
        }
    }

    // this is called in Snake when the snake hits the wall or itself
    this.resetGame = () => {
        console.log('You died.');

        // reset the score 
        this.score = 0;
        this.updateScore(this.score);
        this.currentLevel = 1;
        this.updateLevel();
    }
}