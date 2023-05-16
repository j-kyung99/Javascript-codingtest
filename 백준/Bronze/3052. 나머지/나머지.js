const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i] % 42);
}

const set = new Set(arr);
const uniqueArr = [...set];

console.log(uniqueArr.length);
