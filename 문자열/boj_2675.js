// 못풀었음 => 강사님 코드
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

// 한 줄(line)씩 입력받기
for (let i = 1; i <= testCase; i++) {
  let [r, s] = input[i].split(" ");
  let result = "";
  // 현재 문자열의 각 문자를 하나씩 확인하며
  for (let j = 0; j < s.length; j++) {
    // r 번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(j).repeat(r);
  }
  console.log(result);
}
