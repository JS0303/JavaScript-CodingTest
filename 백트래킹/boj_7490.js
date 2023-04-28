// 강사님 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let n = 0;
let arr = [];
for (let tc = 1; tc <= testCase; tc++) {
  // 각 테스트 케이스 처리
  n = Number(input[tc]); // 자연수(n) 입력받기
  arr = [];
  for (let i = 1; i <= n; i++) arr.push(i); // 1부터 N까지의 수 삽입
  dfs([], 0);
  console.log();
}

function dfs(result, depth) {
  if (depth == n - 1) {
    // 현재 순열(permutation) 처리 (중복 순열 )
    let str = ""; // 현재 수식 문자열
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1] + "";
    current = eval(str.split(" ").join("")); // 공백을 제거한 뒤에 수식 계산
    if (current == 0) console.log(str); // 수식의 결과가 0이 되는 경우 출력
    return;
  }
  for (let x of [" ", "+", "-"]) {
    // 더하기(+), 빼기(-), 혹은 이어 붙이기( )
    result.push(x);
    dfs(result, depth + 1); // 재귀 함수 호출
    result.pop();
  }
}
