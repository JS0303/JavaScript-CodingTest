// 강사님 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let data = []; // 초기 맵 리스트
let temp = []; // 벽을 설치한 뒤의 맵 리스트
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  data.push(line);
  temp.push(new Array(m).fill(0));
}
let dx = [-1, 0, 1, 0]; // 4가지 이동 방향에 대한 리스트
let dy = [0, 1, 0, -1];
let result = 0;

// 깊이 우선 탐색(DFS)을 이용해 각 바이러스가 사방으로 퍼지도록 하기
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue; // 맵을 벗어나는 경우 무시
    if (temp[nx][ny] == 0) {
      temp[nx][ny] = 2; // 해당 위치에 바이러스 배치하고, 다시 재귀적으로 수행
      virus(nx, ny);
    }
  }
}

function getScore() {
  // 현재 맵에서 안전 영역의 크기 계산하는 메서드
  let score = 0;
  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) if (temp[i][j] == 0) score += 1;
  return score;
}

// 깊이 우선 탐색(DFS)을 이용해 울타리를 설치하면서, 매 번 안전 영역의 크기 계산
function dfs(count) {
  if (count == 3) {
    // 울타리가 3개 설치된 경우
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) temp[i][j] = data[i][j]; // 임시 배열에 데이터 기록
    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++) if (temp[i][j] == 2) virus(i, j); // 각 바이러스의 위치에서 전파 진행
    result = Math.max(result, getScore()); // 안전 영역의 최대값 계산
    return;
  }
  for (
    let i = 0;
    i < n;
    i++ // 빈 공간에 울타리를 설치
  )
    for (let j = 0; j < m; j++)
      if (data[i][j] == 0) {
        // 울타리를 3개 설치하는 모든 조합 계산
        data[i][j] = 1;
        dfs(count + 1);
        data[i][j] = 0;
      }
}
dfs(0);
console.log(result);
