// 강사님 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map(Number);
let m = Number(input[2]);

let prefixSum = [0]; //  누적 합(prefix sum)
let summary = 0;
for (let i of data) {
  summary += i;
  prefixSum.push(summary);
}

let answer = "";
for (let query = 3; query <= m + 2; query++) {
  // 각 쿼리(query) 처리
  let [i, j] = input[query].split(" ").map(Number);
  answer += prefixSum[j] - prefixSum[i - 1] + "\n";
}
console.log(answer);
