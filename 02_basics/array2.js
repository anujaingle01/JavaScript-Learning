const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);    // 1st index of 3rd index

const allHeros = marvel_heros.concat(dc_heros)      // concat
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    // IMP spread ...
// console.log(all_new_heros);

// mixtured elements in Array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)     // flat 
console.log(real_another_array);

console.log(Array.isArray("Anu"))   // T or F
console.log(Array.from("Anuja"))
console.log(Array.from({name: "anuja"}))    // Not mentioned Key or Value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));