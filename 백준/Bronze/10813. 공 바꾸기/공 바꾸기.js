const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let answer = [];

for (let i = 1; i <= n; i++) {
  answer.push(i);
}

for (let i = 1; i <= m; i++) {
  let swap = input[i].split(" ").map(Number);
  [answer[swap[0] - 1], answer[swap[1] - 1]] = [
    answer[swap[1] - 1],
    answer[swap[0] - 1],
  ];
}

answer = answer.join(" ");
console.log(answer);
