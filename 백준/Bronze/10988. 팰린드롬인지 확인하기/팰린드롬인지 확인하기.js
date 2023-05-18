const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let a = [];
let b = [];

for (let i = 0; i < parseInt(input.length / 2); i++) {
  a.push(input[i]);
}

for (let i = parseInt(input.length / 2); i < input.length; i++) {
  b.push(input[i]);
}

b = b.reverse();

let count = 0;

for (let i = 0; i < a.length; i++) {
  a[i] === b[i] ? count++ : count;
}
console.log(count === a.length ? 1 : 0);
