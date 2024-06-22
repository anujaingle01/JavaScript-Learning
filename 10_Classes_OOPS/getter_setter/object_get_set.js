const User = {              // User Object       Key:Value - Pair
    _email: 'anu@ai.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

const person = Object.create(User)
console.log(person.email);          // ANU@AI.COM
console.log(person.password);       // ABC