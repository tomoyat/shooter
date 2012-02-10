
var Graphic = function(){
    this.canvas = document.getElementById('canvas');
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
};

Graphic.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.strokeRect(0, 0, this.width, this.height);
};

Graphic.prototype.start = function() {
    this.ctx.font = "30pt Calibri";
    this.ctx.fillText("Click here to Start", 50, 270 );
};

Graphic.prototype.gameOver = function() {
    this.ctx.font = "30pt Calibri";
    this.ctx.fillText("Game Over", 100, 270 );
};

Graphic.prototype.gameClear = function() {
    this.ctx.font = "30pt Calibri";
    this.ctx.fillText("Clear", 140, 270 );
};