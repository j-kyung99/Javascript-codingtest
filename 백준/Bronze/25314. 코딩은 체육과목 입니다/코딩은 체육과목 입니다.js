const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().trim()) / 4;

let long = "long ";

console.log(`${long.repeat(input)}int`);
