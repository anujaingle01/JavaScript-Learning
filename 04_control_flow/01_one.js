
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");      // Compulsory Executed
// <, >, <=, >=, ==, !=, ===, !==       // Operators

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);        // power is not defined


const balance = 1000

// Bad Code Below -
// if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("Greater than 500");
} else if (balance < 750) {
    console.log("Greater than 750");
} else if (balance < 900) {
    console.log("Greater than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// AND =>    && All Condition must be True
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

// OR =>     || Any 1 Condition must be True
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}