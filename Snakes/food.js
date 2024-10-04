class Food {
    constructor(select) {
        this.map = document.querySelector(select);
        this.food = document.createElement("div");
        this.food.className = "food";
        this.map.appendChild(this.food);
        this.x = 0;
        this.y = 0;

        this.foodPos();
    }

    foodPos() {
        const w_num = this.map.clientWidth / 50;
        const h_num = this.map.clientHeight / 50;
        let w_rand = Math.floor(Math.random() * w_num);
        let h_rand = Math.floor(Math.random() * h_num);
        this.x = w_rand * 50;
        this.y = h_rand * 50;
        this.food.style.left = this.x + "px";
        this.food.style.top = this.y + "px";
    }
}