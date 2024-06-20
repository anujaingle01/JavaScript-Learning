function SetUsername(username){
    //complex DB calls
    this.username = username        // chai
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)            // IMP  .call(this,xyz)
   
    this.email = email              // chai@fb.com
    this.password = password        // 123
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);