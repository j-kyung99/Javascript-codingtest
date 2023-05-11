const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = +input[0];
let b = +input[1];

solution(a, b);

function solution(a, b) {
  a > 0 && b > 0
    ? console.log(1)
    : a < 0 && b > 0
    ? console.log(2)
    : a < 0 && b < 0
    ? console.log(3)
    : console.log(4);
}
