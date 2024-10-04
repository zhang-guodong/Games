class Snake {
    constructor(select) {
        this.map = document.querySelector(select);
        this.direction = 'right';
        this.snakeList = [];
        this.createSnake();
    }

    createHead() {
        let pos = {
            x: 0,
            y: this.map.clientHeight / 2 - 25,
        };
        const head = this.snakeList[0]
        if (head) {
            switch (this.direction) {
                case "left":
                    pos.x = head.offsetLeft - 50;
                    pos.y = head.offsetTop;
                    break;
                case "right":
                    pos.x = head.offsetLeft + 50;
                    pos.y = head.offsetTop;
                    break;
                case "up":
                    pos.x = head.offsetLeft;
                    pos.y = head.offsetTop - 50;
                    break;
                case "down":
                    pos.x = head.offsetLeft;
                    pos.y = head.offsetTop + 50;
                    break;
                default:
                    alert('direction error');
                    break;
            }
            head.className = 'body';
        }
        const div = document.createElement('div');
        div.className = 'head';
        this.snakeList.unshift(div);
        div.style.left = pos.x + 'px';
        div.style.top = pos.y + 'px';
        this.map.appendChild(div);
    }

    createSnake() {
        for (let i = 0; i < 4; i++) {
            this.createHead();
        }
    }

    move() {
        const body = this.snakeList.pop();
        body.remove();
        this.createHead();
    }

    isEating(foodX, foodY) {
        const head = this.snakeList[0];
        return head.offsetLeft === foodX && head.offsetTop === foodY;
    }

    isDead() {
        const head = this.snakeList[0];
        // console.log(head.offsetLeft, this.map.clientWidth);
        return head.offsetLeft < 0
            || head.offsetLeft >= this.map.clientWidth
            || head.offsetTop < 0
            || head.offsetTop >= this.map.clientHeight;
    }
}