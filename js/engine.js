var Engine = (function(global) {

	let win = global.window;
	let doc = global.document;
	let canvas = doc.createElement('canvas');
	let ctx = canvas.getContext('2d');
	let lastTime;

	canvas.width = 505;
	canvas.height = 606;
	doc.body.appendChild(canvas);



	function init() {
		// reset();
		lastTime = Date.now();
		main();
	}
	// function reset() {}

	function main() {
		let now = Date.now();
		let dt = (now - lastTime) / 1000.0;

		update(dt);

	}

	function update(dt) {
		updateEntities(dt);
		// checkCollisions();
	}
	// function checkCollisions() {}

	function updateEntities(dt) {
		// allEnemies[] retrieved via app.js
		//console.log(allEnemies);
	}




	Resources.load([
		'images/stone-block.png',
		'images/water-block.png',
		'images/grass-block.png',
		'images/enemy-bug.png',
		'images/char-boy.png'
	]);
	Resources.onReady(init);


	// allows global access to ctx
	global.ctx = ctx;

})(this);

