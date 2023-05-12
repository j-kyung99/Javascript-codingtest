const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let test = input[i].split(" ").map(Number);
  console.log(test[0] + test[1]);
}
