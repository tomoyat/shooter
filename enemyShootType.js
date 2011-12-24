

function nomalShoot(parameter, enemyBullets){
    var x = parameter.x;
    var y = parameter.y;
    var r = parameter.r;
    var dir = parameter.dir;
    var px = parameter.plx;
    var py = parameter.ply;
    
    var dx = px - x;
    var dy = py - y;
    var rad = Math.atan2( dy, dx );
    var nx = x + Math.cos(rad) * (r + 1);
    var ny = y + Math.sin(rad) * (r + 1);
    enemyBullets.add( new Bullet(nx, ny, rad, new enemyBullet(), nomalBullet) );
};

function nomalSpeedShoot(parameter, enemyBullets){
    var x = parameter.x;
    var y = parameter.y;
    var r = parameter.r;
    var dir = parameter.dir;
    var px = parameter.plx;
    var py = parameter.ply;
    
    var dx = px - x;
    var dy = py - y;
    var rad = Math.atan2( dy, dx );
    var nx = x + Math.cos(rad) * (r + 1);
    var ny = y + Math.sin(rad) * (r + 1);
    enemyBullets.add( new Bullet(nx, ny, rad, new enemySpeedBullet(), nomalBullet) );
};

function threeShoot(parameter, enemyBullets){
    var x = parameter.x;
    var y = parameter.y;
    var r = parameter.r;
    var dir = parameter.dir;
    var px = parameter.plx;
    var py = parameter.ply;
    
    var dx = px - x;
    var dy = py - y;
    var rad = Math.atan2( dy, dx );
    var nrad = rad - Math.PI / 6;
    for( var i = 0; i<3; i++){
	var nx = x + Math.cos(nrad) * (r + 1);
	var ny = y + Math.sin(nrad) * (r + 1);
	enemyBullets.add( new Bullet(nx, ny, nrad, new enemyBullet(), nomalBullet) );
	var nrad = nrad + Math.PI / 6;
    }
};

function bossShoot(parameter, enemyBullets){
    var x = parameter.x;
    var y = parameter.y;
    var r = parameter.r;
    var dir = parameter.dir;
    var px = parameter.plx;
    var py = parameter.ply;
    
    var dx = px - x;
    var dy = py - y;
    var rad = Math.atan2( dy, dx );
    var nrad = rad - Math.PI / 7 * 2;
    for( var i = 0; i<5; i++){
	var nx = x + Math.cos(nrad) * (r + 1);
	var ny = y + Math.sin(nrad) * (r + 1);
	enemyBullets.add( new Bullet(nx, ny, nrad, new bossBullet(), slowBullet) );
	var nrad = nrad + Math.PI / 7;
    }
};
