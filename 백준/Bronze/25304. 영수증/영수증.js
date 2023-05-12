const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const x = +input[0];
const n = +input[1];
let sum = 0;

for (let i = 2; i < n + 2; i++) {
  let money = input[i].split(" ");
  sum += money[0] * money[1];
}

x === sum ? console.log("Yes") : console.log("No");
