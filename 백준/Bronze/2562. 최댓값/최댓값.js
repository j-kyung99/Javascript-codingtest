const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push([i + 1, input[i]]);
}
answer.sort((a, b) => b[1] - a[1]);

console.log(answer[0][1]);
console.log(answer[0][0]);
