// storage for enemy objects
let allEnemies = [];

// ****** ENEMY ******

// constructor
let Enemy = function() {
	this.ctx = window.ctx;
	this.sprite = 'images/enemy-bug.png';

};

Enemy.prototype.update = function(dt) {

};

Enemy.prototype.render = function() {

};




// ****** PLAYER ******

// constructor
let Player = function() {

};

Player.prototype.update = function() {

};

Player.prototype.render = function() {

};

Player.prototype.handleInput = function(/* keyPressed */) {

};



// ****** CREATE OBJECTS ******

// create Player object
let player = new Player();
// create Enemy object
let bug1 = new Enemy();
let bug2 = new Enemy();


// push enemy object into allEnemies array
allEnemies.push(bug1);
allEnemies.push(bug2);



