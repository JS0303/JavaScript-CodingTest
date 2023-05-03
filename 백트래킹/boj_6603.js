// 강사님 풀이
function dfs(arr, depth, start) {
  if (depth == 6) {
    // 모든 조합을 확인하는 부분(로또는 6개의 자연수로 구성)
    let result = []; // 조합(combination) 결과 저장 테이블
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " "; // 계산된 조합을 실질적으로 처리하는 부분
    answer += "\n";
    return;
  }
  // start 지점부터 하나씩 원소 인덱스(index)를 확인하며
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue; // [중복을 혀용하지 않으므로] 이미 처리 된 원소라면 무시
    selected.push(i); // 현재 원소 선택
    visited[i] = true; // 현재 원소 방문 처리
    dfs(arr, depth + 1, i + 1); // 조합이므로, 재귀 함수 호출시 다음 인덱스(index)를 넣기
    selected.pop(); // 현재 원소 선택 취소
    visited[i] = false; // 현재 원소 방문 처리 취소
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for(let i = 0; i < input.length; i++) {
  let data = input[i].split(" ").map(Number);
  if(data[0] == 0) break; // 테스트 케이스 종료 조건
  else {
    n = data[0];
    arr = data.slice(1);
    visited = new Array(n).fill(false); // 각 원소 인덱스(index)별 방문 여부
    selected = []; // 현재 조합에 포함된 원소(element)
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer)
  }
}