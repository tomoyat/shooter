

var stage1 = new Schedule();
stage1.endTime = 501;
stage1.add( 10,
	    { x: 66, y:-10, move: nomalEnemyMove,
		    shoot: nomalShoot },
	    new nomalEnemy() );

stage1.add( 10,
	    { x: 132, y:-10, move: nomalEnemyMove,
		    shoot: nomalShoot },
	    new nomalEnemy() );

stage1.add( 10,
	    { x: 200, y:-10, move: nomalEnemyMove,
		    shoot: nomalShoot },
	    new nomalEnemy() );

stage1.add( 10,
	    { x: 266, y:-10, move: nomalEnemyMove,
		    shoot: nomalShoot },
	    new nomalEnemy() );


stage1.add( 10,
	    { x: 332, y:-10, move: nomalEnemyMove,
		    shoot: nomalShoot },
	    new nomalEnemy() );


stage1.add( 100,
	    { x: 200, y:-10, move: nomalEnemyMove,
		    shoot: threeShoot },
	    new nomalEnemy() );


stage1.add( 250,
	    { x: 50, y:-10, move: leftLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 250,
	    { x: 350, y:-10, move: rightLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 290,
	    { x: 50, y:-10, move: leftLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 290,
	    { x: 350, y:-10, move: rightLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 330,
	    { x: 50, y:-10, move: leftLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 330,
	    { x: 350, y:-10, move: rightLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 370,
	    { x: 50, y:-10, move: leftLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 370,
	    { x: 350, y:-10, move: rightLoopEnemyMove,
		    shoot: nomalSpeedShoot },
	    new speedEnemy() );

stage1.add( 500,
	    { x: 200, y:-10, move: bossEnemyMove,
		    shoot: bossShoot },
	    new bossEnemy() );
	    
