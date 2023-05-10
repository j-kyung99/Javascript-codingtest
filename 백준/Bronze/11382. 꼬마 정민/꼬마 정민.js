const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v));

solution(input);

function solution(input) {
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    answer += input[i];
  }
  console.log(answer);
}
