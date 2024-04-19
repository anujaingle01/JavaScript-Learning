// Stored in Stack & Heap
// (Primitive ---> Stack) & (Non Primitive ---> Heap) 


let myName = "Anu"
let newName = myName
newName = "Anuja"

console.log(myName) // old value
console.log(newName) // new value

// IMP : Varibles name stored in stack
// Changes made with Copy



// *************************************


let userOne = {
    email : "anu@goggle.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email="anuja@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// IMP : Varibles value stored in Heap as Reference 
// Changes made in Real