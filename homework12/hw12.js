function addInputForm(insteadElement) {
	let form = document.createElement('form');
	form.innerHTML = 
		`<input type="text" id="diametr" name="diametr" maxlength="3" placeholder="Введите диаметр окружности"><br>`+
		`<p>Цвет окружности в формате RGB</p>`+
		`<label>R: <input type="red" name="red" placeholder="red" max="255" class="rgb"></label>`+
		`<label>G: <input type="green" name="green" placeholder="green" max="255" class="rgb"></label>`+
		`<label>B: <input type="green" name="blue" placeholder="blue" max="255" class="rgb"></label><br>`+
		`<label><input type="checkbox" name="randomColor" id="randomColor" onclick="toogleColor(this)">Random Color</label><br>`+
		`<input type="submit" value="Нарисовать">`+
		`<p id="errorMessage" style="color:red;"></p>`;
	insteadElement.replaceWith(form);
	form.className = "form";
	let rgbInputs = document.getElementsByClassName('rgb');
	Array.prototype.forEach.apply(rgbInputs, [(input)=>{
		input.onkeypress = rgbInputsFilter;
	}]);
	document.getElementById('diametr').onkeypress = diametrInputFilter;
	form.onsubmit = submit;
}

function submit (event) {
	event.preventDefault();
	let width = window.innerWidth;
	let height = window.innerHeight;
	if (event.target.randomColor.checked){
		let x = 0;
		let y = 0;
		let diametr = 100;
		event.target.remove();
		while (y<height-diametr){
			drawCircle(x, y, diametr, getRandomColor(), hideCircle);
			if (x+diametr>width){
				x=0;
				y+=diametr;
			} else {
				x+=diametr;
			}
		}
	} else {
		let diametr  = event.target.diametr.value;
		let red = event.target.red.value;
		let green = event.target.green.value;
		let blue = event.target.blue.value;
		if (diametr.length && red.length && green.length && blue.length){
			event.target.remove();
			drawCircle(
				(width-diametr)/2,
				(height-diametr)/2,
				diametr+'px',
				`rgb(${red}, ${green}, ${blue})`);
		} else {
			sayError("Заполните все поля");
		}
	}
}

function drawCircle (x, y, diametr, color, emitter) {
	let circle = document.createElement('div');
	circle.style.width = diametr+'px';
	circle.style.height = diametr+'px';
	circle.style.borderRadius = '50%';
	circle.style.position = "fixed";
	circle.style.left = x+'px';
	circle.style.top = y+'px';
	circle.style.backgroundColor = color;
	circle.onclick = emitter?emitter:null;
	document.body.appendChild(circle);
}
function getRandomColor () {
	let red = Math.round(Math.random()*255);
	let green = Math.round(Math.random()*255);
	let blue = Math.round(Math.random()*255);
	return `rgb(${red}, ${green}, ${blue})`;
}
function hideCircle (event){
	let startTime = Date.now();
	let animationPeriod = 1000;
	timer();
	function timer(){
		setTimeout(()=>{
			let comleteAnimationPart = (Date.now()-startTime)/animationPeriod;
			if (comleteAnimationPart<1){
				event.target.style.opacity = 1 - comleteAnimationPart;
				timer();
			} else {
				event.target.style.opacity = 0;
				event.target.remove();
			}
		},1);
	}
}
function toogleColor (checkbox){
	let rgbInputs = document.getElementsByClassName('rgb');
	Array.prototype.forEach.apply(rgbInputs, [(input)=>{
		input.disabled = checkbox.checked;
	}]);
	document.getElementById('diametr').disabled = checkbox.checked;
}

function rgbInputsFilter (event) {
	event.preventDefault();
	let text = event.target.value + event.key;
	if (text.replace(/\d+/, "").length || text>255){
		sayError("Значение цвета может быть от 0 до 255");
	} else {
		event.target.value=text;
	}
}

function diametrInputFilter (event) {
	event.preventDefault();
	let text = event.target.value + event.key;
	let maxDiametr = Math.min(window.innerHeight, window.innerWidth);
	if (text.replace(/\d+/, "").length || text>maxDiametr || text<1){
		sayError(`Значение диаметра может быть от 1 до ${maxDiametr}`);
	} else {
		event.target.value=text;
	}
}

function sayError (msg) {
	let startTime = Date.now();
	let animationPeriod = 3000;
	let errorContainer = document.getElementById('errorMessage');
	errorContainer.innerText = msg;
	errorContainer.style.opacity = 1;
	if (errorContainer.timer) clearInterval(errorContainer.timer);
	errorContainer.timer = setInterval(()=>{
			let comleteAnimationPart = (Date.now()-startTime)/animationPeriod;
			if (comleteAnimationPart<1){
				errorContainer.style.opacity = 1 - comleteAnimationPart;
			} else {
				errorContainer.style.opacity = 0;
				clearInterval(errorContainer.timer);
			}
		}, 1);
}
