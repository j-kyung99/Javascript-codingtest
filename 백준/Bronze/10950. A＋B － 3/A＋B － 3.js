const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const num = +input[0];

for (let i = 1; i <= num; i++) {
  let add = input[i].split(" ");
  console.log(+add[0] + +add[1]);
}
