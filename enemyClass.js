
var Enemy = function(_x, _y, _enemySt , _moveFunc, _shootFunc){
    this.x = _x;
    this.y = _y;
    this.exist = 1;
    this.frame = 0;

    this.dir = _enemySt.dir;
    this.r = _enemySt.r;
    this.life = _enemySt.life;
    this.speed = _enemySt.speed;
    this.drow = _enemySt.drow;
    this.oneShootFrame = _enemySt.oneShootFrame;

    this.moveFunc = _moveFunc;
    this.shootFunc = _shootFunc;
};

Enemy.prototype.collision = function( obj ){
    var dx = this.x - obj.x;
    var dy = this.y - obj.y;
    var dr = this.r + obj.r;
    return dr * dr >= ( dx * dx + dy * dy );
};


Enemy.prototype.update = function( px, py, enemyBullets ){
    var nextState = this.moveFunc( {
	    x:this.x, y:this.y, r:this.r, 
	    speed:this.speed,
	    dir:this.dir, exist:this.exist,
	    frame:this.frame, plx:px, ply:py } );

    this.x = nextState.x;
    this.y = nextState.y;
    this.dir = nextState.dir;
    this.speed = nextState.speed;
    this.exist = nextState.exist;
    this.frame++;
    
    if( this.frame % this.oneShootFrame == 0 ){
	this.shootFunc( {
		x:this.x, y:this.y, r:this.r,
		    dir:this.dir, exist:this.exist,
		    frame:this.frame, plx:px, ply:py }, enemyBullets );
    }
};
