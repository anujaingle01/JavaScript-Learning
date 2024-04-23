// const tinderUser = new Object()      // constructor === singleton
const tinderUser = {}                   // No constructor

tinderUser.id = "123abc"
tinderUser.name = "anu"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {           // nested objects
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anuja",
            lastname: "Ingle"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 }     // object in object
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)
console.log(obj5);

const obj6 = {...obj1, ...obj2}     // IMP : spread
console.log(obj6);


const users = [         // Array of Object
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));    // Array of array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // T or F


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "anuja"
}

course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// **** IMP : This is JSON without Object Name with Key as "String" ***
// {
//     "name": "anuja",
//     "coursename": "js in hindi",
//     "price": "free"
// }


[                // Array of Object
    {},
    {},
    {}
]