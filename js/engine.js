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
		main();
	}

	// function reset() {}

	function main() {

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

