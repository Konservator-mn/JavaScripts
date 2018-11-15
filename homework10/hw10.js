let staff = randomArray(15, 3, 15);
let taskList = randomArray(500, 1, 100);
let deadline = new Date(2019, 5, 30);

deadLine_Sum(staff, taskList, deadline);
deadLine_Distrib(staff, taskList, deadline);

function deadLine_Distrib(staff, taskList, deadline) {
	alert("Через распределение задач (Если одну задачу может выполнять только 1 человек)");
	console.log("Через распределение задач (Если одну задачу может выполнять только 1 человек)");
	let haveDays = getWorkingDays();
	staff.forEach((speed, num, staff)=>{
		staff[num] = {
			speed: speed,
			freeTime: speed*haveDays,
			taskList: []
		};
	});
	taskList = taskList.sort((a,b)=>{return a-b;});
	staff.getOneMostFree = function(){
		return this.reduce((mostFree, current, index, staffList)=>{
			return current.freeTime>mostFree.freeTime?current:mostFree;
		});
	};
	

	while (taskList.length){
		let resp = staff.getOneMostFree();
		resp.freeTime -= taskList[taskList.length-1];
		resp.taskList.push(taskList.pop());
	}
	Object.defineProperty(staff, 'totalFreeTime', {
		value: staff.reduce((sum, currentWorker)=>{
			return sum + currentWorker.freeTime;
		}, 0),
		enumerable: false
	});

	let mosteBusy = staff.reduce((mostBusy, currentWorker)=>{
			return currentWorker.freeTime<mostBusy.freeTime?currentWorker:mostBusy;
		});
	if (staff.totalFreeTime<0){
		console.log("Не успевают, надо еще "+Math.abs(mosteBusy.freeTime)+" часов");
		alert("Команде разработчиков придется потратить дополнительно "+Math.abs(mosteBusy.freeTime)+" часов после дедлайна, чтобы выполнить все задачи в беклоге");
	} else {
		console.log("Раньше на "+Math.floor(mosteBusy.freeTime/8)+" дней");
		alert("Все задачи будут успешно выполнены за "+Math.floor(mosteBusy.freeTime/8)+" дней до наступления дедлайна!");
	}
	function getWorkingDays () {
		let workingDays = 0;
		for (let day = Date.now(); day<=Date.parse(deadline); day+=86400000)
			if ((new Date(day)).getDay()<6)  workingDays++;
		return workingDays;
	}
}


function deadLine_Sum(staff, taskList, deadline) {
	alert("Через суммирование (Если каждую задачу можно распределить на несколько исполнителей)");
	console.log("Через суммирование (Если каждую задачу можно распределить на несколько исполнителей)");

	let canPerDay = staff.reduce((sum, curVal)=>{return sum+curVal});
	let needHours = taskList.reduce((sum, curVal)=>{return sum+curVal});
	let needDays = needHours/canPerDay;
	let haveDays = getWorkingDays ();

	if (needDays>haveDays){
		console.log("Не успевают, надо еще "+Math.ceil((needDays-haveDays)*8)+" часов");
		alert("Команде разработчиков придется потратить дополнительно "+Math.ceil((needDays-haveDays)*8)+" часов после дедлайна, чтобы выполнить все задачи в беклоге");
	} else {
		console.log("Раньше на "+(haveDays-Math.ceil(needDays))+" дней");
		alert("Все задачи будут успешно выполнены за "+(haveDays-Math.ceil(needDays))+" дней до наступления дедлайна!");
	}
	
	

	function getWorkingDays () {
		let workingDays = 0;
		for (let day = Date.now(); day<=Date.parse(deadline); day+=86400000)
			if ((new Date(day)).getDay()<6)  workingDays++;
		return workingDays;
	}
}

/*
	Functions for test
*/

function randomArray (length, min, max) {
	let arr = [];
	for (let i=0; i<length; ++i){
		let value = Math.round(Math.random()*(max-min))+min;
		arr.push(value);
	}
	return arr;
}