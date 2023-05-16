const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input[0];
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += Number(input[1][i]);
}
console.log(sum);
