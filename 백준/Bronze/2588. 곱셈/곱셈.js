const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = +input[0];
const b = +input[1];

solution(a, b);

function solution(a, b) {
  console.log(a * (b % 10));
  console.log(a * (parseInt(b / 10) % 10));
  console.log(a * (parseInt(b / 100) % 10));
  console.log(a * b);
}
