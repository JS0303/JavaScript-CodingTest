// 강사님 풀이
function dfs(index, value) {
  if (index == n) {
    minValue = Math.min(minValue, value);
    maxValue = Math.max(maxValue, value);
    return;
  }
  if (add > 0) {
    add--;
    dfs(index + 1, value + arr[index]);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(index + 1, value - arr[index]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(index + 1, value * arr[index]);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(index + 1, ~~(value / arr[index])); // 나눌 때는 나머지를 제거 (c++14과 동일)
    div++;
  }
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 수의 개수
let arr = input[1].split(" ").map(Number); // 연산을 수행하고자 하는 두 리스트
// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)의 연산자 개수
let [add, sub, mul, div] = input[2].split(" ").map(Number);

// 최솟값과 최댓값 초기화
let minValue = 1e9;
let maxValue = -1e9;

// DFS 메서드 호출
dfs(1, arr[0]);

// 최댓값과 최솟값을 차례대로 출력
console.log(maxValue);
console.log(minValue);
