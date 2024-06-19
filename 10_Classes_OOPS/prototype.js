let myName = "anuja     "
let mychannel = "chai     "

// console.log(myName.trueLength);         // undefined

let myHeros = ["thor", "spiderman"]     // array

let heroPower = {                       // object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){         // function
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// object prototype
Object.prototype.anuja = function(){
    console.log(`Anuja is present in all objects`);
}

// array prototype
Array.prototype.heyAnu = function(){
    console.log(`Anu say's HELLO`);
}

// heroPower.getSpiderPower()
// heroPower.anuja()            // obj obj
// heroPower.heyAnu()           // obj arr

// myHeros.anuja()              // arr obj
// myHeros.heyAnu()             // arr arr


// inheritance



// OLD syntax = 
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true,
    __proto__: User     // Anuja wrote this line
}

Teacher.__proto__ = User

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}



// Modern syntax =
Object.setPrototypeOf(TeachingSupport, Teacher)         

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()    // 11
"Anuja".trueLength()            // 5
"anu  ingle".trueLength()       // 10

