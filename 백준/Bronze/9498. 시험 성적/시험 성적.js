const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let a = +input;

solution(a);

function solution(a) {
  a > 89
    ? console.log("A")
    : a > 79
    ? console.log("B")
    : a > 69
    ? console.log("C")
    : a > 59
    ? console.log("D")
    : console.log("F");
}
