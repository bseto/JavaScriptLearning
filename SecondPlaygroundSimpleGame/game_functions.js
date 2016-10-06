var mainPlayer

function startGame() {
    //var canvas = document.getElementById("canvas");
    gameWorld.start();
    mainPlayer = new gameObject(30, 30, "red", 20, 20);
    //mainPlayer.draw();
    var element = document.getElementById("header");
    element.innerHTML = "The Bestest Game";
}

var gameWorld = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width=900;
        this.canvas.height=550;
        this.canvas.style="border:1px solid #d3d3d3;";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);
    },
    clear : function() {
        console.log("Clearing: width:" + this.canvas.width + "height:" + this.canvas.height);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
};

function gameObject(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.velocity_x = 2;
    this.velocity_y = 1.0;
    this.gravity = 0.02;

    this.draw = function() {
        var context = gameWorld.context;
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        context.fillStyle = "red";
        context.fillRect(20,20,30,30);
    }

    this.update = function() {
        console.log("x:" + this.x)
        console.log("y:" + this.y)
        this.x += this.velocity_x;
        this.velocity_y += this.gravity;
        this.velocity_y *= 0.9985; //for friction
        this.y += this.velocity_y;

        if (this.y > gameWorld.canvas.height) {
            this.velocity_y = -this.velocity_y;
        }
        if (this.y < 0) {
            this.velocity_y = -this.velocity_y;
        }
        if (this.x > gameWorld.canvas.width) {
            this.velocity_x = -this.velocity_x;
        }
        if (this.x < 0) {
            this.velocity_x = -this.velocity_x;
        }
    }
}

function Thrust(n) {
//naively assuming there is only 1 game object haha
    mainPlayer.gravity = n;
}

function updateGameArea() {
    gameWorld.clear();
    mainPlayer.update();
    mainPlayer.draw();
}
