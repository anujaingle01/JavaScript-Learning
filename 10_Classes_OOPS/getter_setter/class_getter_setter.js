class User {                                // User Class
    constructor(email, password){           // constructor
        this.email = email;
        this.password = password
    }

    get email(){        // email = Attribute as method
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}ingle`
    }
    set password(value){
        this._password = value
    }
}

const anuja = new User("a@anuja.ai", "abc")     // User Object = anuja
console.log("Email = "+anuja.email);            // A@ANUJA.AI
console.log("Password = "+anuja.password);      // abcingle