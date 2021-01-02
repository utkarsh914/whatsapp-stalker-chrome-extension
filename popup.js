	let startBtn = document.getElementById('startBtn');

	// chrome.storage.sync.get('color', function(data) {
	//	 changeColor.style.backgroundColor = data.color;
	//	 changeColor.setAttribute('value', data.color);
	// });

	startBtn.onclick = function(element) {
	// let color = element.target.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{file: 'track.js'});
	});
	};