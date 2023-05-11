const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(/\s/);

const hour = +input[0];
const min = +input[1];
const time = +input[2];

solution(hour, min, time);

function solution(hour, min, time) {
  min += time;
  while (min >= 60) {
    min -= 60;
    hour += 1;
    if (hour >= 24) {
      hour -= 24;
    }
  }
  console.log(`${hour} ${min}`);
}
