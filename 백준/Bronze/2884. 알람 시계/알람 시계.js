const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let a = +input[0];
let b = +input[1];

solution(a, b);

function solution(a, b) {
  b -= 45;
  if (b < 0) {
    a -= 1;
    if (a === -1) {
      a += 24;
    }
    b += 60;
  }
  console.log(`${a} ${b}`);
}
