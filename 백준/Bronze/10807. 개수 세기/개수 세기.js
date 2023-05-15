const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let int = input[1];
let v = Number(input[2]);
let count = 0;

int = int.split(" ");
for (let i = 0; i < n; i++) {
  Number(int[i]) === v && count++;
}
console.log(count);
