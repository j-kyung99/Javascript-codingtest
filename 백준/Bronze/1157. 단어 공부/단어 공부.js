const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = [];

for (let i = 0; i < 26; i++) {
  answer.push(0);
}

for (let i = 0; i < input.length; i++) {
  let idx = input.charCodeAt(i);
  if (input.charCodeAt(i) > 96) {
    idx -= 32;
  }
  idx -= 65;
  answer[idx]++;
}

let count = answer.filter((v) => v === Math.max(...answer));
console.log(
  count.length > 1 ? "?" : String.fromCharCode(answer.indexOf(count[0]) + 65)
);
