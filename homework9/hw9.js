let todayDate = new Date(Date.now());
let bD = getBD();

alert("Вам "+countAge(bD)+" лет!");

alert("Ваш знак зодиака "+getZodiac(bD));



function getBD() {
    let birthDate = prompt("Введите вашу дату рождения в формате dd.mm.yyyy");
    let dArr = birthDate.split('.');
    dArr.forEach((elem, n, arr)=>{arr[n]=parseInt(elem)});
    let possibleMonthLength = [0, 31, dArr[2]%4?28:29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let bD = new Date(dArr[2], dArr[1]-1, dArr[0]);
    bD.day = parseInt(bD.getDate());
    bD.month = bD.getMonth()+1;
    bD.year = parseInt(bD.getFullYear());
    return (bD == "Invalid Date" || bD.day!=dArr[0] || bD.month!=dArr[1] || bD.year!=dArr[2])?getBD():bD;
}

function countAge(bD) {
    let fullAge = todayDate.getFullYear() - bD.year;
    if (bD.month<todayDate.getMonth()+1)
        return bD.currentAge = fullAge;
    else if (bD.month<todayDate.getMonth()+1)
        return bD.currentAge =fullAge-1;
    else if (bD.day>=todayDate.getDate())
        return bD.currentAge =fullAge;
    else
        return bD.currentAge = fullAge-1;
}

function getZodiac(bD) {
    let zodiacs = [0,
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

    return bD.zodiac = zodiacs[bD.month]();

    function addSigns(toDay, firstSign, secondSign) {
        return function(){
            return (bD.day<=toDay)?firstSign:secondSign;
        }
    }
}

