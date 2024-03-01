// EXAMPLE 1 - Get the First Element of a Set in JavaScript

const set = new Set([1, 2, 3]);

const [first] = set;
console.log(first); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the second element of a Set

// const set = new Set([1, 2, 3]);

// const [, second] = set;
// console.log(second); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the first element of a Set using spread syntax (...)

// const set = new Set([1, 2, 3]);

// const first = [...set][0];
// console.log(first); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the First Element of a Set using `Set.values()`

// const set = new Set([1, 2, 3]);

// const values = set.values(); // 👉️ iterator
// const obj = values.next(); // 👉️ {value: 1, done: false}
// const first = obj.value;
// console.log(first); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the first element of a Set using `for...of`

// const set = new Set(['bobby', 'hadz', 'com']);

// let first;

// for (const element of set) {
//   first = element;
//   break;
// }

// console.log(first); // 👉️ bobby
