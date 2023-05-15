const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let a = input[1].split(" ").map(Number);

a.sort((a, b) => a - b);
console.log(`${a[0]} ${a[a.length - 1]}`);
