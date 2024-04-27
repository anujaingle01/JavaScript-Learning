const userEmail = []        // True

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// IMP :

//  ----------------- falsy values -----------------
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ----------------- truthy values -----------------
// true, 1, "0", 'false', " ", [], {}, function(){}


const userName = [] ;               // Empty Array
if (userName.length === 0) {        // value & datatype
    console.log("Array is empty");
}

const emptyObj = {}                 // Empty Object
if (Object.keys(emptyObj).length === 0) {   // value & datatype
    console.log("Object is empty");
}

// IMP :
// Nullish Coalescing Operator (??): null undefined

let val1,val2,val3,val4 ;
val1 = 50 ?? 10
val2 = null ?? 20
val3 = undefined ?? 150
val4 = null ?? 100 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
