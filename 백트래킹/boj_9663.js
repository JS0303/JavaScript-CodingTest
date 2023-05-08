// 강사님 풀이 -> 시간초과
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0]); // 전체 맵(map)의 크기
// let queens = []; // 현재 체스판에 놓인 퀸(queen)의 위치 정보들

// function possible(x, y) {
//   // (x,y) 위치에 퀸을 놓을 수 있는지 확인
//   for (let [a, b] of queens) {
//     // 현재까지 놓았던 모든 퀸(queen)의 위치를 하나씩 확인하며
//     if (a == x && b == y) return false; // 행이나 열이 같다면 놓을 수 없음
//     if (Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선에 위치한 경우 놓을 수 없음
//   }
//   return true;
// }

// let cnt = 0;
// function dfs(row) {
//   if (row == n) cnt += 1; // 퀸(queen)을 N개 배치할 수 있는 경우 카운트
//   for (let i = 0; i < n; i++) {
//     // 현재 행(row)에 존재하는 열을 하나씩 확인하며
//     if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없다면 무시
//     queens.push([row, i]); // 현재 위치에 퀸을 놓기
//     dfs(row + 1); // 재귀 함수 호출
//     queens.pop(); // 현재 위치에서 퀸을 제거하기
//   }
// }
// dfs(0);
// console.log(cnt);

//chatGPT가 찾아준 코드
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n,
  count = 0;
let col = [];
let diag1 = [];
let diag2 = [];

function solve(row) {
  if (row === n) {
    count++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (col[i] || diag1[row + i] || diag2[row - i + n - 1]) {
      continue;
    }

    col[i] = true;
    diag1[row + i] = true;
    diag2[row - i + n - 1] = true;

    solve(row + 1);

    col[i] = false;
    diag1[row + i] = false;
    diag2[row - i + n - 1] = false;
  }
}

rl.on("line", function (line) {
  n = parseInt(line);

  solve(0);

  console.log(count);

  rl.close();
});

/* 위 코드에서는 백트래킹(backtracking)을 사용하여 문제를 해결합니다.


col, diag1, diag2 배열은 각각 열, 대각선 방향(↗, ↘)의 충돌 여부를 나타내며, solve 함수에서 각 행마다 가능한 열을 찾아 재귀적으로 호출하면서 퀸을 놓습니다.


만약 퀸이 N개 모두 놓여지면 count를 증가시키고 종료합니다.


마지막으로, 입력을 받는 부분에서는 readline 모듈을 사용하였습니다. rl.on('line', function(line) {...}) 함수는 한 줄씩 입력을 받아서 처리합니다. */
