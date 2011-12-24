
onload = function(){
    var game = new Game();
    game.loop();
};


var Game = function(){
    this.fps = 30;
    this.intervalTime = 1000 / this.fps;
    this.interval = this.intervalTime;
    this.graphic = new Graphic();
    this.windowWidth = this.graphic.width;
    this.windowHeight = this.graphic.height;

    this.player = new Player(this.windowWidth,this.windowHeight);
    this.enemys = new EnemyManager(this.windowWidth, this.windowHeight);
    this.enemyBullet = new BulletManager(this.windowWidth, this.windowHeight);
    this.frame = 0;
    this.initFlg = 0;
    //
    this.enemys.add( new Enemy( 30, -10, new nomalEnemy(), nomalEnemyMove, nomalShoot ) ); 
    //

    var self = this;
    this.loop = function(){
	var oneFlameTime = new Date();
	self.graphic.clear();

	switch(self.player.playerState){
	case 0 :
	    self.initFlg = 0;
	    self.graphic.start();
	    // interval
	    oneFlameTime = new Date() - oneFlameTime;
	    self.interval = self.intervalTime - oneFlameTime > 10 ? self.intervalTime - oneFlameTime : 10;
	    setTimeout(self.loop , self.interval);
	    break;
	case 1 :
	    if( self.initFlg == 0 ){
		self.enemys = new EnemyManager(self.windowWidth, self.windowHeight);
		self.enemyBullet = new BulletManager(self.windowWidth, self.windowHeight);
		self.frame = 0;
		self.initFlg = 1;
	    }
	    stage1.doSchedule( self.frame, self.enemys );
	    var px = self.player.x;
	    var py = self.player.y;
	
	    self.player.update(self.enemyBullet);
	    self.player.drow(self.graphic);
	    // Enemy
	    self.enemys.collision( self.player.bulletManager );
	    self.enemys.update(px, py, self.enemyBullet);
	    self.enemyBullet.update(px, py);
	    // Enemy drow
	    self.enemys.drow(self.graphic);
	    self.enemyBullet.drow(self.graphic);

	    self.frame++;

	    if( stage1.endTime <= self.frame && self.enemys.length() == 0 ){
		self.player.playerState = 3;
	    }
	    // interval
	    oneFlameTime = new Date() - oneFlameTime;
	    self.interval = self.intervalTime - oneFlameTime > 10 ? self.intervalTime - oneFlameTime : 10;
	    setTimeout(self.loop , self.interval);
	    break;
	case 2 :
	    self.graphic.gameOver();

	    // interval
	    oneFlameTime = new Date() - oneFlameTime;
	    self.interval = self.intervalTime - oneFlameTime > 10 ? self.intervalTime - oneFlameTime : 10;
	    setTimeout(self.loop , self.interval);
	    break;
	case 3 :
	    self.graphic.gameClear();

	    // interval
	    oneFlameTime = new Date() - oneFlameTime;
	    self.interval = self.intervalTime - oneFlameTime > 10 ? self.intervalTime - oneFlameTime : 10;
	    setTimeout(self.loop , self.interval);
	    break;
	default :
	    // interval
	    oneFlameTime = new Date() - oneFlameTime;
	    self.interval = self.intervalTime - oneFlameTime > 10 ? self.intervalTime - oneFlameTime : 10;
	    setTimeout(self.loop , self.interval);
	    break;
	}
    }
};

