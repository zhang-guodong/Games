class Game {
    constructor(select) {
        this.map = document.querySelector(select);
        this.food = new Food(select);
        this.snake = new Snake(select);
        this.timer = 0;

        // this.start();
    }

    start() {
        this.timer = setInterval(() => {
            // this.snake.move();

            if (this.snake.isEating(this.food.x, this.food.y)) {
                this.snake.createHead();
                this.food.foodPos();
            }

            if (this.snake.isDead()) {
                alert('Game Over');
                clearInterval(this.timer);
                this.restart();
            }

            this.snake.move();

        }, 300);
    }

    pause() {
        clearInterval(this.timer);
    }

    restart() {
        window.location.reload();
    }

    changeDirection(e) {
        switch (e.keyCode) {
            case 37:
                if (this.snake.direction != 'right')
                    this.snake.direction = 'left';
                break;
            case 38:
                if (this.snake.direction != 'down')
                    this.snake.direction = 'up';
                break;
            case 39:
                if (this.snake.direction != 'left')
                    this.snake.direction = 'right';
                break;
            case 40:
                if (this.snake.direction != 'up')
                    this.snake.direction = 'down';
                break;
        }
    }
}