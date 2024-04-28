// Java Execution Content           // IMP
// 1.  Global Execution Content
// 2.  Function Execution Content
// 3.  Eval Execution Content


// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);       // element is not defined

for (let i = 1; i <= 3; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value - ${j} and outer loop value - ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);      // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// -------------- Break and Continue ----------------------

for (let index = 1; index <= 20; index++) {         // Break
    if (index == 5) {
        console.log(`Detected 5`);
        break       // exit loop
    }
   console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 7; index++) {        // Continue
    if (index == 5) {
        console.log(`Detected 5`);
        continue     // skip this loop
    }
   console.log(`Value of i is ${index}`); 
}