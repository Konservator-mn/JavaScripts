let name = null;
let age = null;

ask();

if (name && age && typeof age == "number"){
    if (age<18){
        depricate();
    } else if (age<=22) {
        if (confirm("Are you sure you want to continue?")){
            welcome(name);
        } else {
            depricate();
        }
    } else {
        welcome(name);
    }
} else {
    ask();
}



function ask() {
    name = prompt('Enter your name');
    age = parseInt(prompt("How old are you?"));
}
function welcome (name) {
    alert("Welcome, "+name);
}
function depricate () {
    alert("You are not allowed to visit this website.");
}