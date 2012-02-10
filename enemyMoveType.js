

function nomalEnemyMove(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;
    
    var nx = x + Math.cos(dir) * speed;
    var ny = y + Math.sin(dir) * speed;

    var ret = {};
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = 1;
    
    return ret;
};

function leftLoopEnemyMove(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;

    if( parameter.frame % 9 == 0){
	dir -= Math.PI / 19;
    }
    
    var nx = x + Math.cos(dir) * speed;
    var ny = y + Math.sin(dir) * speed;


    var ret = {};
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = 1;
    
    return ret;
};

function rightLoopEnemyMove(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;

    if( parameter.frame % 9 == 0){
	dir += Math.PI / 19;
    }
    
    var nx = x + Math.cos(dir) * speed;
    var ny = y + Math.sin(dir) * speed;


    var ret = {};
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = 1;
    
    return ret;
};


function bossEnemyMove(parameter){
    var x = parameter.x;
    var y = parameter.y;
    var dir = parameter.dir;
    var speed = parameter.speed;

    var nx = x;
    var ny = y;
    if( y <= 120 ){
	nx = x + Math.cos(dir) * speed;
	ny = y + Math.sin(dir) * speed;
    }
    var ret = {};
    ret.x = nx;
    ret.y = ny;
    ret.dir = dir;
    ret.speed = speed;
    ret.exist = 1;
    return ret;
};
