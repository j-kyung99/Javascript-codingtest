const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let chess = [1, 1, 2, 2, 2, 8];

let answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(chess[i] - input[i]);
}

console.log(answer.join(" "));
