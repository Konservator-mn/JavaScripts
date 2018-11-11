let user = new createNewUser("Sviatoslav", "Kobyvnikov");



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