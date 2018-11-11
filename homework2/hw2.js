let nums = [ask(1), ask(2)].sort((a, b)=>{
    return a - b;
});

for (let i=nums[0]; i<=nums[1];++i)
    outputPrimes(i);

function ask(qustionNum) {
    let inputNumber = parseInt(prompt("Enter a number "+qustionNum));
    return (inputNumber%1===0 && inputNumber>1)?inputNumber:ask(qustionNum);
}

function outputPrimes(num) {
    if (checkPrime(num)) console.log(num);
}

function checkPrime(num) {
    if (num===1 || num===2) return true;
    let limit = num/2;
    for (let divider = 2; divider<limit+1; ++divider){
        let rest = num%divider;
        if (!(rest)) return false;
        if (divider>=limit) return true;
    }
}