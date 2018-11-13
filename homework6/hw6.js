let user = new createNewUser(
    ask("Enter your firstname", checkAnswer),
    ask("Enter your lastname", checkAnswer)
);

console.dir(user);

function ask(phrase, condition){
    let answer = prompt(phrase);
    return condition(answer)?answer:ask(phrase, condition);
}

function checkAnswer(answer) {
    return answer.length && answer.length<20 && !(answer.replace(/[a-z,\s,-]/gi,"")).length;
}

function createNewUser(firstName, lastName) {
    if (arguments.length === 2) {
        let hideFirstName = firstName;
        let hideLastName = lastName;

        Object.defineProperties(this, {
            firstName: {
                get: () => {
                    return hideFirstName;
                }
            },
            lastName: {
                get: () => {
                    return hideLastName;
                }
            }
        });
        this.setFirstName = (firstName) => {
            if (firstName){
                hideFirstName = firstName;
            }
        };
        this.setLastName = (lastName) => {
            if (lastName) {
                hideLastName = lastName;
            }
        };
        this.getLogin = () => {
            return (this.firstName[0] + this.lastName).toLowerCase();
        };
    } else {
        return "Plese, put arguments correctly!";
    }
}