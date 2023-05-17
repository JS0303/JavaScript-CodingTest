// 강사님 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let n = Number(input[0]);

dp = []; // 다이나믹 프그밍을 위한 DP 테이블 초기화
for (let i = 1; i <= n; i++) {
  dp.push(Number(input[i]));
}

// 다이나믹 프로그래밍 수행
for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
}

console.log(Math.max(...dp).toFixed(3));
