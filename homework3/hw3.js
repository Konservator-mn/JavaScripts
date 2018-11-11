let inputNumber = parseInt(prompt("Enter a number"));
document.body.innerText = fact(inputNumber);
function fact(n) {
    return (n>1)?n*fact(--n):1;
}
