const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const n = +input;

for (let i = 1; i < n; i++) {
  let blank = " ".repeat(n - i);
  let star = "*".repeat(i + i - 1);
  console.log(blank + star);
}

for (let i = n; i > 0; i--) {
  let blank = " ".repeat(n - i);
  let star = "*".repeat(i + i - 1);
  console.log(blank + star);
}
