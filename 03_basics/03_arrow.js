const user = {
    username: "anuja",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"       // updated
// user.welcomeMessage()

// console.log(this);          //  {}


function tea(){
    let username = "anu"
    // console.log(this.username);     // undefined
}
tea()       // undefined in function without storing in variable


const chai = function () {
    let username = "anuja"
    // console.log(this.username);     // undefined
}
chai()      // undefined in function with storing in variable



const chai1 =  () => {          // arrow function
    let username = "anuja 1"
    // console.log(this);          //  {}
}
chai1()


const addTwoNo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwoNo(5, 7))


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "anu"})
console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]
myArray.forEach(() => {})