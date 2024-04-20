const name = "anu"
const repoCount = 50
console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anuja-Ingle-com')

console.log(gameName[0]);
console.log(gameName.__proto__);  //object


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4) // n to n-1
console.log(newString);

const anotherString = gameName.slice(1, 7)  // n to n-1
console.log(anotherString);

const newStringOne = "   Anu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/anujaingle01/JavaScript%20Learning/tree/main"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));