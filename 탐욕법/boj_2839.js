// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n >= 0) {
  // 더 이상 반복할 수 없을 때까지 반복
  // n이 0이 되었거나, 5로 나누어 떨어지는 값인 경우
  if (n == 0 || n % 5 == 0) {
    cnt += parseInt(n / 5); // 5로 나눈 몫을 더하기
    console.log(cnt);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}

if (!flag) {
  console.log(-1);
}
