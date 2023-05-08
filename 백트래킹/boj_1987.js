// 출처 : https://velog.io/@jisubin12/%EB%B0%B1%EC%A4%80-1987-%EC%95%8C%ED%8C%8C%EB%B2%B3JavaScript
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const board = input.map((item) => item.split(""));
const alphabet = new Array(26).fill(false);
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let answer = 0;

dfs(0, 0, 1);
console.log(answer);

function dfs(i, j, cellCnt) {
  alphabet[board[i][j].charCodeAt() - 65] = true;
  answer = Math.max(answer, cellCnt);
  for (let d of dir) {
    const [dx, dy] = [i + d[0], j + d[1]];
    if (isValidRange(dx, dy) && !alphabet[board[dx][dy].charCodeAt() - 65]) {
      dfs(dx, dy, cellCnt + 1);
      alphabet[board[dx][dy].charCodeAt() - 65] = false;
    }
  }
}

function isValidRange(i, j) {
  if (i < 0 || i >= R || j < 0 || j >= C) return false;
  else return true;
}

// // 강사님 풀이 => 시간초과
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let [r, c] = input[0].split(" ").map(Number); // 맵의 크기 R x C 입력 받기
// let arr = [];
// for (let i = 1; i <= r; i++) arr.push(input[i]);

// let dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우 방향
// let dy = [0, 0, -1, 1];
// let visited = new Set(); // 방문한 적 있는 알파벳 집합
// let maxDepth = 0; // 최대 깊이

// function dfs(depth, x, y) {
//   maxDepth = Math.max(maxDepth, depth); // 최대 깊이(max depth) 계산
//   for (let i = 0; i < 4; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; // 맵을 벗어난다면 무시
//     if (visited.has(arr[nx][ny])) continue;
//     visited.add(arr[nx][ny]); // 방문 처리
//     dfs(depth + 1, nx, ny); // 재귀 함수 호출
//     visited.delete(arr[nx][ny]); // 방문 처리 해제
//   }
// }

// visited.add(arr[0][0]); // 왼쪽 위에서 출발
// dfs(1, 0, 0);
// console.log(maxDepth);
