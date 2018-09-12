// storage for enemy objects
let allEnemies = [];

// ****** ENEMY ******

// constructor
let Enemy = function() {
	this.ctx = window.ctx;
	this.sprite = 'images/enemy-bug.png';
	// add position coordinates for enemy
	this.x = 100;
	this.y = 0;

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
let bug1 = new Enemy();
let bug2 = new Enemy();


// push enemy object into allEnemies array
allEnemies.push(bug1);
allEnemies.push(bug2);



