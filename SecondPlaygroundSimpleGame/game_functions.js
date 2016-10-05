function startGame() {
    //var canvas = document.getElementById("canvas");
    gameWorld.start();
    var mainPlayer = new gameObject(30, 30, "red", 20, 20);
    mainPlayer.draw();
    var element = document.getElementById("header");
    element.innerHTML = "The Bestest Game";
}

var gameWorld = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width=300;
        this.canvas.height=150;
        this.canvas.style="border:1px solid #d3d3d3;";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function gameObject(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.velocity_x = 0;
    this.velocity_y = 0;

    this.draw = function() {
        var context = gameWorld.context;
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        context.fillStyle = "red";
        context.fillRect(20,20,30,30);
    }
}
