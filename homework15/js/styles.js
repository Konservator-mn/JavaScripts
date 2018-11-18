/*
	1. Добавить ЦД на циферблат;
	2. 
*/

/*
	1. Создаем элемент
*/


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
			console.log("Complete "+ i/amount);
		console.log(Math.sin(Math.PI*2*i/amount));
		console.log(Math.cos(Math.PI*2*i/amount));
	}
}

window.showTime = function (){
	timer.start();
	let timeField = $(".current-time");
	setInterval(()=>{
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