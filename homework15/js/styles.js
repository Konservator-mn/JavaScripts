

allocateByCircle(60);

function allocateByCircle (amount) {
	let parent = $(".face");
	for (let i=0; i<amount; ++i){
		let element = $(`<div class="${(i%5?"small-line":"big-line")}"></div>`)
		$(parent).append(element);
		let height = $(element).css("borderTopWidth").replace("px", "");
		let width = $(element).width();
		let centerX = (parent.width() - width)/2;
		let centerY = (parent.height() - height)/2;
		let sin = Math.sin(Math.PI*2*i/amount);
		let cos = Math.cos(Math.PI*2*i/amount);
		$(element).css("transform", `rotate(${(i*360)/amount}deg)`)
			.css("left",  centerX + (centerX*sin - (height*sin + width*cos)/2 - width/2))
			.css("top", centerY - (centerY*cos));
	}
}
let digitsList = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

allocateDigitsByCircle(digitsList, $('.digits-circle'));

function allocateDigitsByCircle (digits, parent) {
	for (let i=0; i<digits.length; ++i){
		let digit = $('<div>')
			.addClass('digits')
			.text(digits[i]);
		$(parent).append(digit);
		let height = $(digit).height();
		let width = $(digit).width();
		let centerX = (parent.width() - width)/2;
		let centerY = (parent.height() - height)/2;
		let sin = Math.sin(Math.PI*2*i/digits.length);
		let cos = Math.cos(Math.PI*2*i/digits.length);
		$(digit).css("left",  centerX + centerX*sin)
			.css("top", centerY - centerY*cos);	
	}
}

window.showTime = function (){
	timer.start();
	let timeField = $(".current-time");
	return setInterval(()=>{
		let time = timer.sayTime();
		for (i in time) time[i] = time[i]+'';
		time.hours = 
		$(timeField).text(
			`${addSumbols(time.hours, 2)} : `+
			`${addSumbols(time.minutes, 2)} : `+
			`${addSumbols(time.seconds, 2)} : `+
			`${addSumbols(time.milliseconds, 3)}`);
	}, 1);

	function addSumbols (value, length) {
		while (value.length<length){
			value = '0'+value;
		}
		return value;
	}
}();

window.rotateArrow = function (){
	let arrow = $('.arrow');
	return setInterval(()=>{
		let time = timer.sayTime();
		let angle = 3*(time.seconds*1000+time.milliseconds)/500;
		$(arrow).css('transform', `rotate(${angle}deg)`);
	}, 10);
}();