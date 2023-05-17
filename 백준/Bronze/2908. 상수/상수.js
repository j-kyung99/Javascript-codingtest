const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let a = [];
let b = [];

for (let i = 0; i < input[0].length; i++) {
  a.push(input[0][i]);
  b.push(input[1][i]);
}
a = a.reverse();
b = b.reverse();

a = Number(a.join(""));
b = Number(b.join(""));

console.log(Math.max(a, b));
