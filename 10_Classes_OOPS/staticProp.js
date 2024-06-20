class User {                    // class
    constructor(username){      // constructor
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  // static keyword won't allow to make changes 
        return `123`
    }
}

const anuja = new User("anuja")
console.log(anuja.createId())


class Teacher extends User {        // Teacher is Child of User Parent
    constructor(username, email){       // constructor
        super(username)        // super means calling parent constructor 
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());