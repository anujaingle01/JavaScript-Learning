// for of


// ["", "", ""]         // array of string
// [{}, {}, {}]         // array of object

const arr = [1, 2, 3, 4, 5]     // array of number
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"        // string
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
    // console.log(greet)
}



// -------------------- Maps --------------------

const map = new Map()            // map : key-value pair
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);      


for (const key of map) {
    // console.log(key);       // enclosed in [ ]
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}



const myObject = {          // object
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {      
    console.log(key, ':-', value);          // myObject is not iterable
}