const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const score = [];
const a = input[1].split(" ").map(Number);

for (let i = 0; i < n; i++) {
  score.push(a[i]);
}
score.sort((a, b) => b - a);

let max = score[0];
let sum = 0;

for (let i = 0; i < n; i++) {
  score[i] = (score[i] / max) * 100;
  sum += score[i];
}

console.log(parseFloat(sum) / parseFloat(n));
