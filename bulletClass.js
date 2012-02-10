
var Bullet = function(_x, _y, _dir, _st, _updateFunc){
    this.x = _x;
    this.y = _y;
    this.dir = _dir;
    this.st = _st; // íeÇÃê›íË
    this.r = 5;
    this.speed = 5;
    this.exist = 1;
    this.frame = 0;
    this.updateFunc = _updateFunc;

    this.speed = _st.speed;
    this.r = _st.r;
    this.drow = _st.drow;
    
};
Bullet.prototype.update = function(px,py){
    var nextState = this.updateFunc({
	    x:this.x, y:this.y,
	    dir:this.dir, speed:this.speed,
	    frame:this.frame, exist:this.exist,
	    plx:px, ply:py });
    this.x = nextState.x;
    this.y = nextState.y;
    this.dir = nextState.dir;
    this.speed = nextState.speed;
    this.exist = nextState.exist;
    this.frame++;
};

