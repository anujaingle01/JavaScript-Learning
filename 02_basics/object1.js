// ***** singleton *****
// ***** Object.create ***** 

// object literals

const mySym = Symbol("key1")    // Symbol

const JsUser = {        // object
    name: "Anuja",
    "full name": "Anuja Ingle",
    [mySym]: "mykey1",      // symbol
    age: 24,
    location: "Akola",
    email: "anuja@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])     // compulsory [" "]
console.log(JsUser[mySym])       // Symbol


JsUser.email = "anuja@chatgpt.com"
// Object.freeze(JsUser)        // cannot rename afterwards
JsUser.email = "anuja@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     // backtick
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
