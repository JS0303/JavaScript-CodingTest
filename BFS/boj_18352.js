// 강사님의 풀이
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

// 도시의 개수(N), 도로의 개수(M), 거리(K), 출발 도시(X)
let [n, m, k, x] = input[0].split(" ").map(Number);
let graph = []; // 그래프 정보
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
}
// 모든 도시에 대한 최단 거리 초기화
let distance = new Array(n + 1).fill(-1);
distance[x] = 0; // 출발 도시까지의 거리는 0으로 설정

// 너비 우선 탐색(BFS) 수행
let queue = new Queue();
queue.enqueue(x);
while (queue.getLength() != 0) {
  // 큐가 빌 때까지 반복하기
  let now = queue.dequeue();
  // 현재 도시에서 이동할 수 있는 모든 도시를 확인
  for (let nextNode of graph[now]) {
    if (distance[nextNode] == -1) {
      // 방문하지 않은 도시라면
      distance[nextNode] = distance[now] + 1;
      queue.enqueue(nextNode);
    }
  }
}
// 최단 거리가 K인 모든 도시의 번호를 오름차순으로 출력
let check = false;
for (let i = 1; i <= n; i++) {
  if (distance[i] == k) {
    console.log(i);
    check = true;
  }
}
if (!check) console.log(-1); // 최단 거리가 K인 도시가 없다면
