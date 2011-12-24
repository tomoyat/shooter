
var Player = function(_w, _h){
    this.x = 250;
    this.y = 400;
    this.r = 10;
    this.life = 5;
    this.mouseX = 250;
    this.mouseY = 400;
    this.maxMove = 15;
    this.windowWidth = _w;
    this.windowHeight = _h;
    this.shootFrame = 0;
    this.playerState = 0;
    this.hitSt = 0;
    this.oneShootFrame = 5;
    this.bulletManager = new BulletManager(_w,_h);
    var self = this;
    document.onmousemove = function(e){
	if( !e ) e = window.event;
	self.mouseX = e.clientX - self.r;
	self.mouseY = e.clientY - self.r * 2;
    };
    document.onclick = function(e){
	if( self.playerState == 0 ){
	    self.playerState = 1;
	}
	if( self.playerState == 2 || self.playerState == 3 ){
	    self.init();
	    self.playerState = 0;
	}
    };
};

Player.prototype.init = function(){
    this.x = 250;
    this.y = 400;
    this.life = 3;
    this.mouseX = 250;
    this.mouseY = 400;
    this.hitSt = 0;
    this.shootFrame = 0;
    this.bulletManager = new BulletManager(this.windowWidth,this.windowHeight);
};

Player.prototype.update = function( bm ){
    if( this.hitSt > 0 ){ this.hitSt--; }

    if( this.hitSt == 0 && this.collision(bm) ){
	this.life--; 
	this.hitSt = 10;
    }
    this.move();
    this.shootFrame = (this.shootFrame + 1) % this.oneShootFrame;
    if( this.shootFrame == 0 ){
	this.shoot();
    }
    this.bulletManager.update(this.x,this.y);

    if( this.life < 0 ){ this.playerState = 2; }
};

Player.prototype.shoot = function(){
    this.bulletManager.add( new Bullet(this.x - 10, this.y - this.r,
				       -Math.PI / 2, new playerBullet(), nomalBullet) );
    this.bulletManager.add( new Bullet(this.x + 10, this.y - this.r,
				       -Math.PI / 2, new playerBullet(), nomalBullet) );
};

Player.prototype.move = function(){
    var dx = this.mouseX - this.x;
    var dy = this.mouseY - this.y;
    var rad = Math.atan2( dy, dx );
    var dist = Math.sqrt( dx*dx + dy*dy );

    dist = dist > this.maxMove ? this.maxMove : dist;
    this.x = this.x + Math.cos(rad) * dist;
    this.y = this.y + Math.sin(rad) * dist;


    if(this.x < this.r ) this.x = this.r;
    if(this.x > this.windowWidth - this.r ) this.x = this.windowWidth - this.r;
    if(this.y < this.r ) this.y = this.r;
    if(this.y > this.windowHeight - this.r ) this.y = this.windowHeight - this.r;
};

Player.prototype.collision = function( bm ){
    var px = this.x;
    var py = this.y;
    var pr = this.r;
    var flg = false;
    for( var i = 0; i<bm.bullets.length(); i++){

	var dx = px - bm.bullets.get(i).x;
	var dy = py - bm.bullets.get(i).y;
	var dr = pr + bm.bullets.get(i).r;
	if( dr * dr >= ( dx * dx + dy * dy ) ){
	    flg = true;
	    bm.bullets.get(i).exist = 0;
	}
    }
    return flg;
};


Player.prototype.drow =function(graphic){
    this.bulletManager.drow(graphic);
    graphic.ctx.beginPath();
    graphic.ctx.globalAlpha = 1.0;

    if(this.hitSt != 0 && this.hitSt % 2 == 0) {
	graphic.ctx.globalAlpha = 0.5;
    }
    graphic.ctx.fillStyle = "#00ccff";
    //    graphic.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
    //    graphic.ctx.fill();
    graphic.ctx.moveTo( this.x, this.y - 15 );
    graphic.ctx.lineTo( this.x - 15 , this.y + 20 );
    graphic.ctx.lineTo( this.x , this.y + 10 );
    graphic.ctx.lineTo( this.x + 15 , this.y + 20 );
    graphic.ctx.closePath();
    graphic.ctx.fill();

    graphic.ctx.globalAlpha = 1.0;
};
