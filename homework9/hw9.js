let todayDate = createDate(Date.now());
let bD = getBD();

alert("Вам "+countAge(bD)+" лет!");
alert("Ваш знак зодиака "+getZodiac(bD));
alert("Ваш год рождения по восточному календарю "+getEasternYear(bD));

function getBD() {
    let birthDate = prompt("Введите вашу дату рождения в формате dd.mm.yyyy");
    let dArr = birthDate.split('.');
    dArr.forEach((elem, n, arr)=>{arr[n]=parseInt(elem)});
    let bD = createDate(dArr[2], dArr[1]-1, dArr[0]);
    return (bD == "Invalid Date" || bD.day!=dArr[0] || bD.month!=dArr[1] || bD.year!=dArr[2])?getBD():bD;
}
function countAge(bD) {
    let fullAge = todayDate.year - bD.year;
    if (bD.month<todayDate.month)
        return bD.currentAge = fullAge;
    else if (bD.month<todayDate.month)
        return bD.currentAge =fullAge-1;
    else if (bD.day>=todayDate.day)
        return bD.currentAge =fullAge;
    else
        return bD.currentAge = fullAge-1;
}
function getZodiac(bD) {
    let zodiacs = [
        addSigns(20, "Козерог", "Водолей"),
        addSigns(20, "Водолей", "Рыбы"),
        addSigns(20, "Рыбы", "Овен"),
        addSigns(20, "Овен", "Телец"),
        addSigns(20, "Телец", "Близнецы"),
        addSigns(21, "Близнецы", "Рак"),
        addSigns(22, "Рак", "Лев"),
        addSigns(23, "Лев", "Дева"),
        addSigns(23, "Дева", "Весы"),
        addSigns(23, "Весы", "Скорпион"),
        addSigns(22, "Скорпион", "Стрелец"),
        addSigns(21, "Стрелец", "Козерог")
    ];
    return bD.zodiac = zodiacs[bD.month-1]();
    function addSigns(toDay, firstSign, secondSign) {
        return function(){
            return (bD.day<=toDay)?firstSign:secondSign;
        }
    }
}
function getEasternYear(bD) {
    let signsList = ["Крыса", "Бык", "Тигр", "Кролик", "Дракон", "Змея", "Лошадь", "Коза", "Обезьяна", "Петух", "Собака", "Свинья"];
    let d = bD.year-1912;
    return signsList[d<0?d%12+12:d%12];
}
function createDate(date) {
    let createdDate;
    if (arguments.length>1){
        createdDate = new Date(arguments[0], arguments[1], arguments[2]);
    } else {
        createdDate = new Date(date);
    }
    if (createdDate != "Invalid Date"){
        createdDate.year = parseInt(createdDate.getFullYear());
        createdDate.month = parseInt(createdDate.getMonth()+1);
        createdDate.day = parseInt(createdDate.getDate());
    }
    return createdDate;
}

