const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let a = +input[0];
let b = +input[1];

solution(a, b);

function solution(a, b) {
  console.log(a + b);
}
