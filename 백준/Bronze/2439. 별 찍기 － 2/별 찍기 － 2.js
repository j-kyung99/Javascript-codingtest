const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = "";
let blank = "";

for (i = 1; i <= input; i++) {
  answer += "*";
  for (let j = 0; j < input - i; j++) {
    blank += " ";
  }
  console.log(blank + answer);
  blank = "";
}
