// storage for enemy objects
let allEnemies = [];

// ****** ENEMY ******

// constructor
let Enemy = function(enemyImgURL, startXPos, startYPos) {
	this.ctx = window.ctx;
	this.sprite = enemyImgURL;
	// add position coordinates for enemy
	this.x = startXPos;
	this.y = startYPos;

};

Enemy.prototype.update = function(dt) {

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

};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(/* keyPressed */) {

};



// ****** CREATE OBJECTS ******

// create Player object
let player = new Player('images/char-boy.png', 300, 200);
// create Enemy object
let bug1 = new Enemy('images/enemy-bug.png', 100, 0);
let bug2 = new Enemy('images/enemy-bug.png', 180, 200);


// push enemy object into allEnemies array
allEnemies.push(bug1);
allEnemies.push(bug2);



