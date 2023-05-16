const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const a = input[0].split(" ").map(Number);
const n = a[0];
const m = a[1];
//console.log(`n: ${n}, m: ${m}`);

const answer = [];
for (let i = 0; i < n; i++) {
  answer.push("0");
}

for (let i = 0; i < m; i++) {
  let b = input[i + 1].split(" ");
  for (let j = b[0] - 1; j <= b[1] - 1; j++) {
    answer[j] = b[2];
  }
}
const hi = answer.join(" ");
console.log(hi);
