// storage for enemy objects
let allEnemies = [];

// ****** ENEMY ******

// constructor
let Enemy = function(enemyImgURL, startXPos, startYPos, speed) {
	this.ctx = window.ctx;
	this.sprite = enemyImgURL;
	// add starting position coordinates
	this.x = startXPos;
	this.y = startYPos;
	// add speed
	this.speed = speed;

};

Enemy.prototype.update = function(dt) {
	this.x += dt * this.speed;
};

Enemy.prototype.render = function() {
	// draw enemy onto board
	ctx.drawImage( Resources.get(this.sprite), this.x, this.y );
};







// ****** PLAYER ******

// constructor
let Player = function(playerImgURL, startXPos, startYPos) {
	this.sprite = playerImgURL;
	this.x = startXPos;
	this.y = startYPos;
};


Player.prototype.update = function() {
	// left collision
	if (this.x < 0) {
		this.x = 0;
	// right collision
	} else if (this.x > 400) {
		this.x = 400;
	// top collision
	} else if (this.y < -10) {
		this.y = -10;
	// bottom collision
	} else if (this.y > 400) {
		this.y = 400;
	}
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyCode) {

	let canvas = document.getElementsByTagName('canvas');
	console.log(canvas);
	switch(keyCode) {
		// left
		case 37:
			this.x -= 101;
			break;
		// up
		case 38:
			this.y -= 83;
			break;
		// right
		case 39:
			this.x += 101;
			break;
		// down
		case 40:
			this.y += 83;
			break;
	}

};







// ****** CREATE OBJECTS ******

// create Player object
let player = new Player('images/char-boy.png', 200, 400);



/*
	- All 3 values in enemyYPos are Y position rows where stone-blocks are drawn from. We divide 83
	  which is the height of the stones by 2 to get the mid-section of the stones, then subtract it
	  from each value in the enemyYPos array. Newly calculated values are added to enemyYPos array.
	- Optionally, we could just subtract 41.5(half of 83) from all 3 values:
	  let enemyYPos = [41.5, 124.5, 207.5]
*/
let enemyYPos = [83, 166, 249].map(function(val) {
	return val - (83/2);
});

// create Enemy object
setInterval(function() {
	// select random value from enemyYPos array
	let randY = enemyYPos[ Math.floor((Math.random() * enemyYPos.length)) ];
	// create enemies
	let bug = new Enemy('images/enemy-bug.png', -140, randY, 50);
	// add enemies to allEnemies array
	allEnemies.push(bug);
}, 4000);








// ****** EVENT LISTENERS ******
document.addEventListener('keydown', function(evt) {
	let keyCode = evt.keyCode;
	player.handleInput(keyCode);
}, false);





