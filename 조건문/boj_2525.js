const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
let H = parseInt(input[0].slice(0, 2));
let M = parseInt(input[0].slice(3, 5));
let T = parseInt(input[1]);
console.log(input);
console.log(H, M, T);
console.log(M + T);
if (M + T >= 60) console.log(M + T);
M = (M + T) % 60;
H += parseInt((M + T) / 60);
if (H > 23) H -= 24;
else if (H === 24) H = 0;
else M += T;
console.log(H, M);

// 아직 다 못 품
