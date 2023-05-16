const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);

for (let i = 1; i <= t; i++) {
  let answer = "";
  let alp = input[i];
  answer = alp[0] + alp[alp.length - 1];
  console.log(answer);
}
