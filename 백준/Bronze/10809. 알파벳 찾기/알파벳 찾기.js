const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = [];
for (let i = 0; i < 26; i++) {
  answer.push(-1);
}

for (let i = 0; i < input.length; i++) {
  if (answer[input.charCodeAt(i) - 97] === -1) {
    answer[input.charCodeAt(i) - 97] = i;
  }
}

console.log(answer.join(" "));
