// 강사님 풀이 -> 시간초과
// 일반적인 다익스트라와 동일하지만, a<->b 간선은 무시하는 함수
function dijkstra(a, b) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소 힙(Min Heap)
  // 시작 노드로 가기 위한 최단거리는 0으로 우선순위 큐에 삽입
  pq.enqueue([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.dequeue();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      // a<->b 간선은 무시
      if (i[0] == a && now == b) continue;
      else if (i[0] == b && now == a) continue;
      let cost = dist + i[1];
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enqueue([cost, i[0]]);
      }
    }
  }
}

// 최단 경로 역추적 함수
function bfs() {
  let queue = new Queue();
  let visited = new Set(); // 특정한 노드 방문 여부
  queue.enqueue(end); // 도착 지점(end)을 큐에 삽입
  let removes = []; // 삭제할 간선들(결과)
  while (queue.getLength() != 0) {
    // 큐가 빌 때까지 반복하기
    let now = queue.dequeue();
    if (now == start) {
      // 시작점에 도착한 경우
      continue; // 모든 최단 경로를 확인하기 위해 break 대신 continue
    }
    for (let i of graph[now]) {
      // 현재 노드와 연결된 간선들 확인
      let cost = distance[i[0]] + i[1];
      // 최단경로에 포함된 간선인 경우 삭제 목록에 추가
      if (cost == distance[now]) {
        removes.push([i[0], now]);
        // 각 "직전 노드"는 한 번씩만 방문
        if (!visited.has(i[0])) {
          queue.enqueue(i[0]);
          visited.add(i[0]);
        }
      }
    }
  }
  return removes;
}

// Queue
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

// PriorityQueue
class PriorityQueue {
  constructor() {
    // 각 노드별 idx 접근을 쉽게하기 위해 1-based 인덱스를 만들기위해 쓰지않는 값인 0읗 넣어줌
    this.queue = [0];
  }

  enqueue(element) {
    let isertIdx = this.queue.length; // 새로운 원소가 삽입될 idx

    /*
        부모 노드의 값 : Math.floor(qSize / 2);
        만일 부모노드의 값이 현재 입력될 값보다 같거나 작으면 부모노드의 값을 isertIdx에 넣어주고
        isertIdx를 부모노드의 idx로 바꿔주고 다시 검사

        isertIdx > 1 큰 경우에만 isertIdx==1 인 경우는 이미 전체 탐색이 완료한 경우이므로 종료
        탐색 후 나온 isertIdx값에 새로운 원소를 넣어주면 됨.
        */
    while (isertIdx > 1 && this.queue[Math.floor(isertIdx / 2)] <= element) {
      this.queue[isertIdx] = this.queue[Math.floor(isertIdx / 2)]; // 새로운 원소가 삽입될 idx에 부모의 값 넣어주고
      isertIdx = Math.floor(isertIdx / 2); // 새로운 원소 삽입 idx를 부모 idx로 바꿔주고 재 검사
    }
    this.queue[isertIdx] = element;
  }

  dequeue() {
    let delValue = this.queue[1]; // 삭제 될 값
    let lastValue = this.queue.pop(); // 큐의 마지막 값
    this.queue[1] = lastValue; // 삭제 될 위치에 큐의 마지막 값을 넣어줌

    let qSize = this.queue.length - 1; //현재 배열에서 값이 들어갈 수 있는 최대 idx
    let pIdx = 1; // 탐색을 시작할 부모idx
    let cIdx = 2; // 탐색을 시작할 자식idx

    while (cIdx <= qSize) {
      // 두 자식중 큰 노드와 부모 노드와 비교
      if (this.queue[cIdx] < this.queue[cIdx + 1]) {
        cIdx += 1;
      }

      // 만약 자식 노드와 비교해서 크다면 더이상 검사할 필요가 없으므로 break
      if (lastValue >= this.queue[cIdx]) {
        break;
      }

      /*
            만약 자식노드가 더 큰 경우 !
            현재 부모노드 값에 자식 값을 넣어주고
            부모 idx를 자식 idx를 바꾸고 자식 idx를 왼쪽 자식 노드idx로 바꿔주고 다시 검사
             */
      this.queue[pIdx] = this.queue[cIdx];

      pIdx = cIdx; // 검사할 부모노드는 현재 자식 노드 idx로
      cIdx *= 2; // 자식 노드의 왼쪽 자식 노드 idx로
    }

    // 검사 후 나온 pIdx에 lastValue값을 넣어줌
    this.queue[pIdx] = lastValue;

    return delValue;
  }

  front() {
    return this.queue[1];
  }

  size() {
    return this.queue.length - 1;
  }

  clear() {
    this.queue = [0];
  }
}

let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
// 노드의 개수, 간선의 개수를 입력받기
let [n, m] = input[0].split(" ").map(Number);
// 시작 노드와 도착 노드
let [start, end] = [1, n];
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);

// 모든 간선 정보를 입력받기
for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
// 최단 거리 테으블을 모두 무한으로 초기화
let distance = new Array(n + 1).fill(INF);
// 다익스트라 알고리즘을 수행
dijkstra(-1, -1);

// 최단 경로 역추적: 모든 최단 경로에 포함된 간선 쌍 (a,b)들을 계산
let removes = bfs();

let result = 0;
// 모든 최단 경로에 포함된 간선 쌍 (a,b)들을 확인
for ([a, b] of removes) {
  // 최단 거리 테이블을 모두 무한으로 초기화
  distance = new Array(n + 1).fill(INF);
  // a<->b 간선은 무시하는 다익스트라 알고리즘을 수행
  dijkstra(a, b);
  result = Math.max(result, distance[end]);
}
console.log(result);
