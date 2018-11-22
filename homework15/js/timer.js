let timer = new Timer();

function Timer () {
	let msec = 0;
	let sec = 0;
	let min = 0;


	let timeCounter = null;
	let passedBefore = 0;
	let passedTime = 0;

	this.startPause = function () {
		if (timeCounter){
            clearInterval(timeCounter);
            timeCounter = null;
            passedBefore = passedTime;
		} else {
            let startTime = Date.now();
            timeCounter = setInterval (()=>{
                passedTime = Date.now() - startTime + passedBefore;
            	msec = passedTime%1000;
            	sec = ((passedTime - msec)/1000)%60;
            	min = ((passedTime - msec - sec*1000)/60000)%60;
        	},1);
		}

	};
	this.stop = function () {
		clearInterval(timeCounter);
        timeCounter = null;
		msec = 0;
		sec = 0;
		min = 0;
		passedTime = 0;
		passedBefore = 0;
	};

	this.sayTime = function(){
		return {
			minutes: min,
			seconds: sec,
			milliseconds: msec 
		};
	};	
}