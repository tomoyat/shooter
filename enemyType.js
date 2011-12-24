
var nomalEnemy = function(){
    this.r = 10;
    this.life = 1;
    this.speed = 2;
    this.dir = Math.PI / 2.0;
    this.oneShootFrame = 20;
};
nomalEnemy.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#ff3333";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
};


var speedEnemy = function(){
    this.r = 10;
    this.life = 1;
    this.speed = 6;
    this.dir = Math.PI / 2.0;
    this.oneShootFrame = 10;
};
speedEnemy.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#ff3333";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
};



var bossEnemy = function(){
    this.r = 20;
    this.life = 200;
    this.speed = 7;
    this.dir = Math.PI / 2.0;
    this.oneShootFrame = 15;
};

bossEnemy.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#ff3333";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
};

