const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// trim() 메소들르 통해 문자열 양 끝의 공백을 제거
// 공백으로 구분된 단어의 개수 출력
let data = input[0].trim().split(" ");

if (data == "") {
  console.log(0);
} else {
  console.log(data.length);
}
