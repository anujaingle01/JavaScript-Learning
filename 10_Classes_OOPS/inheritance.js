class User {                            // class
    constructor(username){              // constructor
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{         // Teacher is Child of User Parent
    constructor(username, email, password){     // constructor
        super(username)        // super means calling parent constructor 
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()                 // USERNAME is chai

const masalaChai = new User("masalaChai")
masalaChai.logMe()           // USERNAME is masalaChai

console.log(Teacher === User);              // false
console.log(chai instanceof User);          // true