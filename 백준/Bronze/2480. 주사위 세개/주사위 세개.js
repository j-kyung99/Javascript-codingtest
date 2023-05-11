const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(/\s/);

const a = +input[0];
const b = +input[1];
const c = +input[2];

solution(a, b, c);

function solution(a, b, c) {
  if (a === b && b === c) {
    console.log(10000 + a * 1000);
  } else {
    if (a === b && b !== c) {
      console.log(1000 + a * 100);
    } else if (a !== b && b === c) {
      console.log(1000 + b * 100);
    } else if (a === c && b !== c) {
      console.log(1000 + a * 100);
    } else {
      console.log(Math.max(a, b, c) * 100);
    }
  }
}
