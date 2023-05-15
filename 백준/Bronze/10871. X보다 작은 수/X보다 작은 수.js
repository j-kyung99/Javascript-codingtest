const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = input[0].split(" ").map(Number);
let b = input[1].split(" ").map(Number);

let n = a[0];
let x = a[1];
let answer = "";

for (let i = 0; i < n; i++) {
  if (x > b[i]) {
    answer += b[i] + " ";
  }
}

console.log(answer);
