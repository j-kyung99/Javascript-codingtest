const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = +input[0];
let answer = "";

for (let i = 1; i <= t; i++) {
  answer = "";
  let [r, s] = input[i].split(" ");
  for (let j = 0; j < s.length; j++) {
    for (let k = 0; k < r; k++) {
      answer += s[j];
    }
  }
  console.log(answer);
}
