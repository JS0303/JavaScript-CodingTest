// 내 풀이
// const fs = require('fs')
// const input = fs.readFileSync('/dev/stdin').toString().split(' ')
// let H = parseInt(input[0])
// let M = parseInt(input[1])
// if (H === 0) {
//   if (M >= 45 && M <= 59){
//     M -= 45
//   } else if (M >= 0 && M < 45) {
//     H = 23
//     M += 15
//   }
// } else {
//   if (M >= 45 && M <= 59){
//     M -= 45
//   } else if (M >= 0 && M < 45) {
//     H -= 1
//     M += 15
//   }
// }

// console.log(H, M)

// 강사님 풀이
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let hour = Number(input[0].split(" ")[0]);
let minute = Number(input[0].split(" ")[1]);

if (minute < 45) {
  // 분이 45분 미만이라면
  hour -= 1;
  minute += 15;
  if (hour < 0) hour = 23;
} else minute -= 45;

console.log(hour + " " + minute);
