// 내 풀이
const fs = require("fs");
const n = Number(fs.readFileSync("/dev/stdin").toString().split(" "));

for (let i = 1; i <= 9; i++) console.log(`${n} * ${i} = ${n * i}`);
