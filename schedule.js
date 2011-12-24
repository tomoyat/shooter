
var Schedule = function(){
    this.schedule = [];
    this.endTime = 0;
};

Schedule.prototype.add = function( time , enemyparam, enemytype ){
    if( !this.schedule[time] ){
	this.schedule[time] = [];
    }

    this.schedule[time][this.schedule[time].length] = {
	param: enemyparam,
	type: enemytype
    }
};

Schedule.prototype.doSchedule = function(time, emlist){
    if( !this.schedule[time] ){ return; }
    
    for(var i = 0; i<this.schedule[time].length; i++){
	var param = this.schedule[time][i].param;
	var st = this.schedule[time][i].type;
	emlist.add( new Enemy( param.x, param.y, st, param.move, param.shoot ));

    }
};


