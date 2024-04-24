var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    console.log(b)
    console.log(c)
}

console.log(a);
// console.log(b);
console.log(c);


function one(){
    const username = "anuja"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);        // not defined

     two()
}

// one()


if (true) {
    const username = "anu"
    if (username === "anu") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);        // not defined
}

// console.log(username);           // not defined



// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)        // call after variable function defined
const addTwo = function(num){
    return num + 2
}