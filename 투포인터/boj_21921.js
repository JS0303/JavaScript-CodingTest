// 강사님 풀이
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let [n, x] = input[0].split(" ").map(Number);
let arr = [0, ...input[1].split(" ").map(Number)];

let sum = 0;
for (let i = 1; i <= n; i++) {
  // 1부터 X번째 날의 방문자 수의 합
  if (i <= x) sum += arr[i];
}
let maxSum = sum; // 가장 큰 합
let count = 1; // 기간의 개수

// 슬라이딩 윈도우 시작
let left = 1;
let right = x;
while (true) {
  // 윈도우를 한 칸 오른쪽으로 이동하기
  left += 1;
  right += 1;
  if (right > n) break;
  sum = sum + arr[right] - arr[left - 1]; // 합을 계산하여 정답 갱신
  if (maxSum == sum) count += 1;
  else if (maxSum < sum) {
    // 더 큰 합을 찾은 경우
    maxSum = sum;
    count = 1;
  }
}

if (maxSum == 0) console.log("SAD"); // 정답 출력
else {
  console.log(maxSum);
  console.log(count);
}
