const user = {
    username: "anuja",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
user.username = "sam"       // updated
user.welcomeMessage()

console.log(this);          //  {}


function tea(){
    let username = "anu"
    console.log(this.username);
}
tea()       // undefined in function without storing in variable


const chai = function () {
    let username = "anuja"
    console.log(this.username);
}
chai()      // undefined in function 


const chai1 =  () => {
    let username = "anuja 1"
    // console.log(this);
}
// chai1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()