// *********** Array *************


const myArr = [0, 1, 2, 3, 4, 5]    // numbers
console.log(myArr[1]);

const myHeors = ["shaktiman", "naagraj"]    // strings

const myArr2 = new Array(1, 2, 3, 4)        // obj


// ******** Array methods ********

// IMP :   push = Add & pop = Remove
myArr.push(6)
myArr.push(7)
myArr.pop()      // removes last element

myArr.unshift(9)     // add before 1st element
// myArr.shift()        // remove 1st element 

console.log(myArr.includes(9));      // boolen value
console.log(myArr.indexOf(3));       // gives index no.

const newArr = myArr.join()

console.log(myArr);      // show ans with array 
console.log(newArr);    // show ans without array


// ********** slice, splice ************


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)          // n, n-1
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);                      // n, n
console.log("C ", myArr);    // Removes all splice range from array

