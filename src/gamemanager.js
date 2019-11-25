export default function GameManager(p5,scl) {
    let scoreDisplay;
    let levelDisplay;

    this.score = 0;
    this.gameSpeed = 10;
    this.level = 100; // at each multiple of this points, the gameSpeed goes up., so after 10x food of 10 points at a 100
    this.currentLevel = 1;
    

    this.showScore = () => {
        // show the Your score element
        scoreDisplay = p5.createP('Your score: ' + this.score);
        scoreDisplay.class('score');
        scoreDisplay.position(5, -15); // not sure why we should have to set the Y value to negative, maybe its the default margin
    }

    this.updateScore = (score) => {
        scoreDisplay.html('Your score: ' + this.score);
        this.changeGameSpeed(this.score);
    }

    this.showLevel = () => {
        // show the level element
        levelDisplay = p5.createP('Level: ' + this.currentLevel);
        levelDisplay.class('score');
        levelDisplay.position(p5.width - 100, -15); // not sure why we should have to set the Y value to negative, maybe its the default margin
    }

    this.updateLevel = () => {
        levelDisplay.html('Level: ' + this.currentLevel);
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