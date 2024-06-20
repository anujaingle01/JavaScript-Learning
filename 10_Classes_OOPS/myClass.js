// ES6

class User {                                            // Class
    constructor(username, email, password){             // constructor
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`                    // 123abc
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`         // CHAI
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());




// behind the scene
// It's function so injecting encryptPassword, changeUsername as user defined property

function User1(username, email, password){                // function
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}xyz`                            // 123xyz
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`                 // TEA
}

const tea = new User1("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());