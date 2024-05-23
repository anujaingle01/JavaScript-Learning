// Promise Study :

// try  , catch , finally = Java
// then , catch , finally = JavaScript


// --------------- Way 1 ---------------
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Promise created 1');
        resolve()
    }, 1000)        // 1000 means 1 second
})

promiseOne.then(function(){     
    console.log("Promise consumed 1");
})


// --------------- Way 2 ---------------
new Promise(function(resolve, reject){      // promise created
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){                         // promise consumed
    console.log("Async 2 resolved");
})


// --------------- Way 3 ---------------
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // parameter as object passed.
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user); // {username: "Chai", email: "chai@example.com"}
})


// --------------- Way 4 ---------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {           // false
            resolve({username: "anuja", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {                  // arrow function ( () => {} )
    console.log(user);
    return user.username            // anuja
})
.then((username) => {               // .then() can be used many times
    console.log(username);          // anuja
})
.catch(function(error){             // Chaining = Nested Methods 
    console.log(error);             // ERROR: Something went wrong
})
.finally(() => console.log("The promise is either resolved or rejected"))
                                // implicit method without {return   }


// --------------- Way 5 ---------------
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


// 5a.   async - await - try - catch

async function consumePromiseFive(){            // async - await
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive() 


// 5b.  async - await - try - catch - fetch

// async function getAllUsers(){                // fetch(url is present)
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  //data = string to object 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers()


// 5c. then - catch - fetch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()      // data from = string to object
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



// promise.all                  // self study to learn Topic

