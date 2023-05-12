const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(/\s/);

const a = +input[0];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];

solution(a);

function solution(a) {
  b.map((v) => console.log(`${a} * ${v} = ${a * v}`));
}
