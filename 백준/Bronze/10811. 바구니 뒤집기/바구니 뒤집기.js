const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ");
const answer = [];

for (let i = 0; i < n; i++) {
  answer.push(i + 1);
}

for (let i = 1; i <= m; i++) {
  let [left, right] = input[i].split(" ").map(Number);
  let arr = [];
  for (let j = left - 1; j < right; j++) {
    arr.push(answer[j]);
  }
  arr.reverse();
  answer.splice(left - 1, right - left + 1, ...arr);
}
console.log(answer.join(" "));
