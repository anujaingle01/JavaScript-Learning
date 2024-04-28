// for in 

const myObject = {          // object
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} = shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]  // array of string
for (const key in programming) {
    // console.log(key)        // index number
    // console.log("key = "+programming[key]);
    // console.log(`key = ${programming[key]}`);
}


const map = new Map()       // map
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key in map) {
//     console.log(key);       // display no output
// }