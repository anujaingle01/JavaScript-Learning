// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){     // function format
    // console.log(val);
} )

coding.forEach( (item) => {         // arrow function 
    // console.log(item);
} )

coding.forEach( (item, index, arr)=> {      // arrow function
    // console.log(item, index, arr);
} )


function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)
// coding.forEach(printMe()) // undefined is not a function - NOT ALLOWED



const myCoding = [      // array of object
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java language",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )