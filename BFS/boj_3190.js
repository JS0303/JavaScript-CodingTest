// // 강사님 풀이 -> 틀림
// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }
//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }
//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;
//     return item;
//   }
//   peek() {
//     return this.items[this.headIndex];
//   }
//   getLength() {
//     return this.tailIndex - this.headIndex;
//   }
// }

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0]); // 보드의 크기(N)
// let k = Number(input[1]); // 사과의 개수(K)
// let data = []; // [N+1][N+1] 크기의 맵 정보
// for (let i = 0; i < n + 1; i++) {
//   data.push(new Array(n + 1).fill(0));
// }
// for (let i = 2; i <= k + 1; i++) {
//   let [a, b] = input[i].split(" ").map(Number);
//   data[a][b] = 1; // 사과가 있는 곳은 1로 표시
// }
// let l = Number(input[k + 2]); // 뱀의 방향 변환 횟수
// let info = [];
// for (let i = k + 3; i < k + 3 + l; i++) {
//   let [x, c] = input[i].split(" ");
//   info.push([Number(x), c]);
// }

// // 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
// let dx = [0, 1, 0, -1];
// let dy = [1, 0, -1, 0];
// function turn(direction, c) {
//   if (c == "L") {
//     direction = direction - 1;
//     if (direction == -1) direction = 3;
//   } else direction = (direction + 1) % 4;
//   return direction;
// }

// let [x, y] = [1, 1]; // 뱀의 머리 위치
// data[x][y] = 2; //뱀이 존재하는 위치는 2로 표시
// let direction = 0; // 처음에는 동쪽을 보고 있음
// let time = 0; // 시작한 뒤에 지난 '초' 시간
// let index = 0; // 다음에 회전할 정보
// let q = new Queue();
// q.enqueue([x, y]); // 뱀이 차지하고 있는 위치 정보 (꼬리가 앞쪽)
// while (true) {
//   let nx = x + dx[direction];
//   let ny = y + dy[direction];
//   if (1 <= nx && nx <= n && 1 <= ny && ny <= n && data[nx][ny] != 2) {
//     // 맵 범위 안에 있고, 뱀의 몸통이 없는 위치라면
//     if (data[nx][ny] == 0) {
//       // 사과가 없다면 이동 후에 꼬리 제거
//       data[nx][ny] = 2;
//       q.enqueue([nx, ny]);
//       let [px, py] = q.dequeue();
//       data[px][py] = 0;
//     }
//     if (data[nx][ny] == 1) {
//       // 사과가 있다면 이동 후에 고리 그대로 두기
//       data[nx][ny] = 2;
//       q.enqueue([nx, ny]);
//     }
//   } else {
//     // 벽이나 뱀의 몸통과 부딪혔다면
//     time += 1;
//     break;
//   }
//   [x, y] = [nx, ny]; // 다음 위치로 머리를 이동
//   time += 1;
//   if (index < 1 && time == info[index][0]) {
//     // 회전할 시간인 경우 회전
//     direction = turn(direction, info[index][1]);
//     index += 1;
//   }
// }
// console.log(time);

// 출처 : https://jaekwan.tistory.com/140
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input.shift());
const K = Number(input.shift());
let route = [];
// 북 동 남 서
const diraction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let apples = [];
for (let i = 0; i < K; i++) {
  apples.push(input.shift().split(" "));
}
apples = apples.map((x) => x.map((y) => Number(y)));

let commands = [];
const L = input.shift();
for (let i = 0; i < L; i++) {
  let temp = input.shift().trim().split(" ");
  commands[i] = {
    time: Number(temp[0]),
    diraction: temp[1],
  };
}

let board = new Array(N + 2);
for (let i = 0; i < N + 2; i++) {
  board[i] = new Array(N + 2).fill(0);
}
board[1][1] = "s";

for (let i = 0; i < N + 2; i++) {
  board[i][0] = 1;
  board[i][N + 1] = 1;
  board[0][i] = 1;
  board[N + 1][i] = 1;
}

for (let i = 0; i < apples.length; i++) {
  board[apples[i][0]][apples[i][1]] = "a";
}

let snake = {
  diraction: 1,
  head: [1, 1],
  tail: [1, 1],
};

let gameTime = 0;
let nextCommand = commands[0].time;
while (1) {
  let nextY = snake.head[0] + diraction[snake.diraction][0];
  let nextX = snake.head[1] + diraction[snake.diraction][1];

  // 뱀이 이리저리 기어다니다가 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다.
  if (board[nextY][nextX] === 1 || board[nextY][nextX] === "s") {
    //console.log('gameEnd');
    // console.log(board);
    //console.log(nextY, nextX);
    //console.log(board[nextY][nextX]);
    //console.log(snake.diraction);
    break;
  } else {
    // 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
    if (board[nextY][nextX] === "a") {
      //console.log('apple!');
      // 사과가 없어진다.
      board[nextY][nextX] = "s";

      // 뱀의 이동경로를 기록한다.
      route.push([nextY, nextX]);

      // 뱀의 머리가 이동한다.
      snake.head[0] = nextY;
      snake.head[1] = nextX;
    }
    // 만약 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다.
    else if (board[nextY][nextX] === 0) {
      //console.log(nextY, nextX);
      // 뱀의 머리를 이동시킨다.
      snake.head[0] = nextY;
      snake.head[1] = nextX;
      board[snake.head[0]][snake.head[1]] = "s";

      // 뱀의 이동경로를 기록한다.
      route.push([nextY, nextX]);

      // 뱀의 꼬리가 있던 자리를 비운다.
      board[snake.tail[0]][snake.tail[1]] = 0;

      // 뱀의 꼬리를 이동시킨다.
      let nextXY = route.shift();
      snake.tail[0] = nextXY[0];
      snake.tail[1] = nextXY[1];
    }
  }
  gameTime++;
  // 1초가 지났다.

  // 방향 전환 정보에 따라서 움직인다.
  if (gameTime === nextCommand) {
    if (commands[0].diraction === "D") {
      //console.log('turn Right')
      snake.diraction = (snake.diraction + 1) % 4;
    } else if (commands[0].diraction === "L") {
      //console.log('turn Left')
      if (snake.diraction - 1 < 0) snake.diraction = 3;
      else snake.diraction = (snake.diraction - 1) % 4;
    }
    commands.shift();
    if (commands.length === 0) nextCommand = 0;
    else nextCommand = commands[0].time;
  }
}
console.log(gameTime + 1);
