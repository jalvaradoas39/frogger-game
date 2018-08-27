(function() {

	let resourceCache = {};


	function load(urlOrArr) {
		if (urlOrArr instanceOf Array) {
			console.log('an array');
		} else {
			console.log('a string');
		}
	}


	// public api
	window.Resources = {
		load: load
	};

})();








































// (function() {

// 	// test data
// 	let domOutput = document.getElementById('test');

// 	function preloadImages(array) {
// 		if (!preloadImages.list) {
// 			preloadImages.list = [];
// 		}

// 		let list = preloadImages.list;


// 		for (let i=0; i < array.length; i++) {
// 			let imgElem = document.createElement('img');
// 			imgElem.alt = 'player';
// 			imgElem.src = 'images/' + array[i];
// 			imgElem.classList.add('puffImgSize')

// 			imgElem.onload = function(evt) {
				
// 				// if img already cached in array, get it's index; otherwise -1 is returned for non-existent
// 				let index = list.indexOf(evt.currentTarget);
// 				// exec if image elem currently in list
// 				if (index !== -1) {
// 					list.splice(index, 1);
// 				}

// 				domOutput.appendChild(imgElem);
// 				list.push(imgElem);
// 			}
// 		}
// 		console.log(list);

// 	}


// 	let val = preloadImages(['char-boy.png', 'char-pink-girl.png', 'enemy-bug.png', 'Rock.png']);

// })();



