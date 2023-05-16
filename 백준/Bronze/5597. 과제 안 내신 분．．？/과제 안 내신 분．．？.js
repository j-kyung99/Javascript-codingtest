const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
//console.log(input);
let student = [];
for (let i = 0; i < 30; i++) {
  student.push(i + 1);
}

student.sort((a, b) => a - b);

for (let i = 0; i < 28; i++) {
  student = student.filter((s) => s !== input[i]);
}

console.log(student[0]);
console.log(student[1]);
