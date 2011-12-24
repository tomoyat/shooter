

var playerBullet = function(){
    this.speed = 7;
    this.r = 3;
    
};

playerBullet.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    //    graphic.ctx.fillStyle = "#FF0000";
    graphic.ctx.fillStyle = "#000099";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
};

var enemyBullet = function(){
    this.speed = 5;
    this.r = 3;
};

enemyBullet.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#cc0033";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
    graphic.ctx.fillStyle = "#000000";
};
var enemySpeedBullet = function(){
    this.speed = 13;
    this.r = 3;
};
enemySpeedBullet.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#cc0033";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
    graphic.ctx.fillStyle = "#000000";
};

var bossBullet = function(){
    this.speed = 7;
    this.r = 3;
};
bossBullet.prototype.drow = function(graphic){
    graphic.ctx.beginPath();
    graphic.ctx.fillStyle = "#cc0033";
    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    graphic.ctx.fill();
    graphic.ctx.fillStyle = "#000000";
};

function slowBullet(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;
    if( parameter.frame >= 12 && parameter.frame % 3 == 0 && speed > 3){
	speed -= 0.2;
    }

    var exist = parameter.exist;
    var nx = x + Math.cos(dir) * speed;
    var ny = y + Math.sin(dir) * speed;

    var ret = {};

    
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = exist;
    return ret;
};


function nomalBullet(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;
    var exist = parameter.exist;
    var nx = x + Math.cos(dir) * speed;
    var ny = y + Math.sin(dir) * speed;

    var ret = {};
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = exist;
    return ret;
};

function speedUp(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;
    var exist = parameter.exist;
    if( parameter.frame % 2 == 0 )speed++;
    var nx = x + Math.cos(dir) * speed;
    var ny = y + Math.sin(dir) * speed;
    var ret = {};
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = exist;
    return ret;
};

