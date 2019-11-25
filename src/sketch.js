import Snake from "./snake"
import GameManager from "./gamemanager"
export default function (p5) {
    const scl = 10;
    let food;
    let gameManager;
    let snake;
    let img;

    p5.setup = () => {
        // canvas
        p5.background(220, 220, 220);
        p5.createCanvas(500, 500);

        // load the image for the food 
        img = p5.loadImage("/images/food.png");

        // new Snake and GameManager objects
        snake = new Snake(p5, scl);
        gameManager = new GameManager(p5, scl);

        // initialize the score and leveldisplay
        gameManager.showScore();
        gameManager.showLevel();

        // set the gamespeed
        p5.frameRate(gameManager.gameSpeed);

        // pick a location for the food
        pickLocation();
    }

    // divide screen by cols, otherwise the snake and the food dont line up nicely
    function pickLocation() {
        let cols = p5.floor(p5.width / scl);
        let rows = p5.floor(p5.height / scl);

        food = p5.createVector(p5.floor(p5.random(cols)), p5.floor(p5.random(rows)));
        food.mult(scl);
    }

    p5.draw = () => {
        p5.background(220, 220, 220);
        // check if the snake is dead, update and show the snake
        let health = snake.death();
        if(!health)
            gameManager.resetGame()
        snake.update();
        snake.show();

        // if the snake eats the food, update the score and pick a new location for the food
        if (snake.eat(food)) {
            pickLocation();
            gameManager.score += 10;
            gameManager.updateScore(gameManager.score);
        }

        // draw an image at the foods location. the -3 and -6 are to offset the image to best cover the location
        p5.image(img, food.x - 3, food.y - 6);
    }

    // calculate the distance to the from the snake, with Pythagoras
    function distanceToFood() {
        let a2 = (snake.x - food.x) * (snake.x - food.x);
        let b2 = (snake.y - food.y) * (snake.y - food.y);
        return p5.sqrt(a2 + b2);
    }

    // player game controls 
    p5.keyPressed = () => {
        if (p5.keyCode === p5.UP_ARROW) {
            snake.dir(0, -1);
        } else if (p5.keyCode === p5.RIGHT_ARROW) {
            snake.dir(1, 0);
        } else if (p5.keyCode === p5.LEFT_ARROW) {
            snake.dir(-1, 0);
        } else if (p5.keyCode === p5.DOWN_ARROW) {
            snake.dir(0, 1);
        }
    }
}