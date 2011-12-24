
var EnemyManager = function(_w, _h){
    this.enemys = new List();
    this.windowW = _w;
    this.windowH = _h;
};
EnemyManager.prototype.add = function( enemy ){
    this.enemys.push(enemy);
};
EnemyManager.prototype.length = function(){
    return this.enemys.length();
};

EnemyManager.prototype.isIn = function( x, y, r){
    return 0 <=  x + r && x - r < this.windowW && 0 <= y + r && y - r < this.windowH;
};

EnemyManager.prototype.collision = function( bm ){
    for( var i = 0; i<this.enemys.length(); i++ ) {
	for( var j = 0; j < bm.bullets.length(); j++){
	    if( this.enemys.get(i).collision( bm.bullets.get(j) ) ){
		this.enemys.get(i).life--;
		bm.bullets.get(j).exist = 0;
	    }
	}
    }
};

EnemyManager.prototype.update = function(px, py, enemyBullets){

    for(var i = 0; i<this.enemys.length(); ){
	var x = this.enemys.get(i).x;
	var y = this.enemys.get(i).y;
	var r = this.enemys.get(i).r;
	var life = this.enemys.get(i).life;
	var frame = this.enemys.get(i).frame;
	if( life <= 0 || (frame > 15  && !this.isIn( x, y, r ) ) ){
	    this.enemys.delete( i );
	} else {
	    this.enemys.get(i).update(px , py, enemyBullets);
	    i++;
	}
    }
};
EnemyManager.prototype.drow = function(graphic ){
    for(var i = 0; i<this.enemys.length(); i++){
	this.enemys.get(i).drow(graphic);
    }
};
