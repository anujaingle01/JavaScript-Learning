// Immediately Invoked Function Expressions (IIFE)
// To Avoid polluted Global variables to affect child Variables 

// ()();  IIFE


(function chai(){                       // named IIFE
    console.log(`DB CONNECTED`);
})();                                   // (;) is Compulsory


// Without function name but with Parameter & argument
( (name) => {                           // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('anu');



( () => {                               // IIFE Format
 console.log("Hello")
})();