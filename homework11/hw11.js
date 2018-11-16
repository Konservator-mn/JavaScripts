let list = document.getElementById('list');
let listLength = prompt("Сколько пунктов будет в списке?");

if (listLength) addListItem();

function addListItem() {
	let item = document.createElement('li');
	item.innerText = prompt("Введите текст для "+(list.children.length+1)+" пункта списка");
	list.appendChild(item);
	if (--listLength) addListItem();
	else timer();
}

function timer () {
	let startTime = Date.now();
	let time = 30;
	let timerContainer = document.getElementById('timer');
	timerContainer.parentElement.style.display = 'block';
	timerItteration ();
	function timerItteration () {
		let timePassed = Math.round((Date.now()-startTime)/1000);
		if (time>timePassed){
			setTimeout(function () {
				timerContainer.innerText = time-timePassed;
				timerItteration();
			}, 1);
		} else document.body.innerHTML = "";
	}
}