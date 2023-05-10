// 강사님 풀이
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let graph = []; // 전체 보드 정보를 담는 리스트
let data = []; // 바이러스에 대한 정보를 담는 리스트

for (let i = 0; i < n; i++) {
  // 보드 정보를 한 줄 단위로 입력
  graph.push(input[i + 1].split(" ").map(Number));
  for (let j = 0; j < n; j++) {
    // 해당 위치에 바이러스가 존재하는 경우
    if (graph[i][j] != 0) {
      // (바이러스의 종류, 시간, 위치 X, 위치 Y) 삽입
      data.push([graph[i][j], 0, i, j]);
    }
  }
}

// 정렬 이후에 큐로 옮기기 (낮은 번호의 바이러스가 먼저 증식)
data.sort((a, b) => a[0] - b[0]);
queue = new Queue();
for (let x of data) {
  queue.enqueue(x);
}

let [targetS, targetX, targetY] = input[n + 1].split(" ").map(Number);

// 바이러스가 퍼져나갈 수 있는 4가지의 위치
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// 너비 우선 탐색(BFS) 진행
while (queue.getLength() != 0) {
  let [virus, s, x, y] = queue.dequeue();
  // 정확히 s초가 지나거나, 큐가 빌 때까지 반복
  if (s == targetS) break;
  // 현재 노드에서 주변 4가지 위치를 각각 확인
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 해당 위치로 이동할 수 있는 경우
    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
      // 아직 방문하지 않은 위치라면, 그 위치에 바이러스 넣기
      if (graph[nx][ny] == 0) {
        graph[nx][ny] = virus;
        queue.enqueue([virus, s + 1, nx, ny]);
      }
    }
  }
}
console.log(graph[targetX - 1][targetY - 1]);
