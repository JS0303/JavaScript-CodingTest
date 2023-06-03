// 강사님 풀이
function dijkstra(start) {
  // 다익스트라(Dijkstra) 알고리즘 수행
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙(Min Heap)
  // 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.deq();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;
    // 현재 노드가 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      let cost = dist + i[1];
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
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
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
let graph = [];
for (let i = 0; i <= n + 1; i++) graph.push([]);
// 모든 간선 정보를 입력받기
for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  // a번 노드에서 b번 노드로 가는 비용이 c라는 의미
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
// 꼭 거쳐야 하는 a와 b 노드 입력받기
let [a, b] = input[m + 1].split(" ").map(Number);

let distance = new Array(n + 1).fill(INF); // 최단 거리 테이블 초기화
dijkstra(1); // 다익스트라 알고리즘 수행
let distance_1_to_a = distance[a];
let distance_1_to_b = distance[b];

distance = new Array(n + 1).fill(INF); // 최단 거리 테이블 초기화
dijkstra(a); // 다익스트라 알고리즘 수행
let distance_a_to_b = distance[b];
let distance_a_to_n = distance[n];

distance = new Array(n + 1).fill(INF); // 최단 거리 테이블 초기화
dijkstra(b); // 다익스트라 알고리즘 수행
let distance_b_to_a = distance[a];
let distance_b_to_n = distance[n];

let route1 = distance_1_to_a + distance_a_to_b + distance_b_to_n;
let route2 = distance_1_to_b + distance_b_to_a + distance_a_to_n;

let result = Math.min(route1, route2);
if (result >= INF) console.log(-1); // 경로가 없는 경우
else console.log(result);
