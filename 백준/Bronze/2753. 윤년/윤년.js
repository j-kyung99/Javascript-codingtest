const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let a = +input;

solution(a);

function solution(a) {
  a % 400 === 0
    ? console.log(1)
    : a % 4 === 0 && a % 100 !== 0
    ? console.log(1)
    : console.log(0);
}
