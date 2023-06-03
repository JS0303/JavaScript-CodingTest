//강사님 풀이
function dijkstra(start) {
  // 다익스틀(Dijkstra) 알고리즘 수행
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙(Min Heap)
  // 시작 노드로 가기 위한 최단 경로는 0으로 설정하여, 큐에 삽입
  pq.enq([0, start, 0]); // (비용, 노드 번호, 포장 횟수)
  distance[start][0] = 0;
  while (pq.size() != 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now, paved] = pq.deq();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now][paved] < dist) continue;
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      // 1) 포장하지 않은 경우
      let cost = dist + i[1];
      if (cost < distance[i[0]][paved]) {
        distance[i[0]][paved] = cost;
        pq.enq([cost, i[0], paved]);
      }
      // 2) 포장하는 경우(cost 대신에 dist 사용)
      if (paved < k && dist < distance[i[0]][paved + 1]) {
        distance[i[0]][paved + 1] = dist;
        pq.enq([dist, i[0], paved + 1]);
      }
    }
  }
}

// 코드 출처 : https://my-first-programming.tistory.com/entry/%EB%B0%B1%EC%A4%80-1162-%EB%8F%84%EB%A1%9C%ED%8F%AC%EC%9E%A5-javascript
// let file = require("fs").readFileSync("/dev/stdin");
// let input = file.toString().split("\n");

// let INF = 1e17; // 무한을 의미하는 값으로 10억을 설정
// // 노드의 개수(N), 간선의 개수(M), 포장할 간선의 수(K)
// let [n, m, k] = input[0].split(" ").map(Number);
// // 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열을 만들기
// let graph = [];
// for (let i = 0; i <= n + 1; i++) graph.push([]);
// for (let i = 1; i <= m; i++) {
//   // 모든 간선 정보를 입력받기
//   let [a, b, c] = input[i].split(" ").map(Number);
//   graph[a].push([b, c]); // 양방향 간선
//   graph[b].push([a, c]);
// }
// // 최단 거리 테이블을 모두 무한으로 초기화 ([인덱스][포장 횟수])
// let distance = [new Array(k + 1).fill(INF)];
// for (let i = 1; i <= n; i++) distance[i] = new Array(k + 1).fill(INF);

// dijkstra(1); // 다익스트라 알고리즘을 수행
// let result = INF; // 노드 N에 도착하기 위한 최소 거리 출력
// for (let i = 0; i <= k; i++) {
//   result = Math.min(result, distance[n][i]);
// }
// console.log(result);

// const fs = require("fs");
// const stdin = (
//   process.platform === "linux"
//     ? fs.readFileSync("/dev/stdin").toString()
//     : `4 6 1
//     4 3 3
//     3 1 3
//     2 1 3
//     2 4 200
//     3 2 300
//     1 2 200`
// ).split("\n");

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

// const [N, M, K] = input()
//   .trim()
//   .split(" ")
//   .map((v) => +v);

// const arr = Array.from({ length: N + 1 }, () => []);
// for (let i = 0; i < M; i++) {
//   const [a, b, c] = input()
//     .trim()
//     .split(" ")
//     .map((v) => +v);
//   arr[a].push([c, b]);
//   arr[b].push([c, a]);
// }

// class Heap {
//   constructor(comparator = (a, b) => a - b) {
//     this.array = [];
//     this.comparator = (i1, i2) => {
//       const value = comparator(this.array[i1], this.array[i2]);
//       if (Number.isNaN(value)) {
//         throw new Error(
//           `Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`
//         );
//       }
//       return value;
//     };
//   }

//   /**
//    * Insert element
//    * @runtime O(log n)
//    * @param {any} value
//    */
//   add(value) {
//     this.array.push(value);
//     this.bubbleUp();
//   }

//   /**
//    * Retrieves, but does not remove, the head of this heap
//    * @runtime O(1)
//    */
//   peek() {
//     return this.array[0];
//   }

//   /**
//    * Retrieves and removes the head of this heap, or returns null if this heap is empty.
//    * @runtime O(log n)
//    */
//   remove(index = 0) {
//     if (!this.size) return null;
//     this.swap(index, this.size - 1); // swap with last
//     const value = this.array.pop(); // remove element
//     this.bubbleDown(index);
//     return value;
//   }

//   /**
//    * Returns the number of elements in this collection.
//    * @runtime O(1)
//    */
//   get size() {
//     return this.array.length;
//   }

//   /**
//    * Move new element upwards on the heap, if it's out of order
//    * @runtime O(log n)
//    */
//   bubbleUp() {
//     let index = this.size - 1;
//     const parent = (i) => Math.ceil(i / 2 - 1);
//     while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
//       this.swap(parent(index), index);
//       index = parent(index);
//     }
//   }

//   /**
//    * After removal, moves element downwards on the heap, if it's out of order
//    * @runtime O(log n)
//    */
//   bubbleDown(index = 0) {
//     let curr = index;
//     const left = (i) => 2 * i + 1;
//     const right = (i) => 2 * i + 2;
//     const getTopChild = (i) =>
//       right(i) < this.size && this.comparator(left(i), right(i)) > 0
//         ? right(i)
//         : left(i);

//     while (
//       left(curr) < this.size &&
//       this.comparator(curr, getTopChild(curr)) > 0
//     ) {
//       const next = getTopChild(curr);
//       this.swap(curr, next);
//       curr = next;
//     }
//   }

//   /**
//    * Swap elements on the heap
//    * @runtime O(1)
//    * @param {number} i1 index 1
//    * @param {number} i2 index 2
//    */
//   swap(i1, i2) {
//     [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
//   }
// }

// const pq = new Heap((a, b) => a[0] - b[0]);

// const dijkstra = (start) => {
//   const dp = new Array(N + 1)
//     .fill(null)
//     .map((_) => new Array(K + 1).fill(Infinity));

//   dp[start][0] = 0;
//   pq.add([0, start, 0]);
//   while (pq.size > 0) {
//     const [pqW, pqV, pqPavedRoad] = pq.remove();
//     if (dp[pqV][pqPavedRoad] < pqW) continue;
//     for (let [arrW, arrV] of arr[pqV]) {
//       const totalW = arrW + pqW;
//       if (totalW < dp[arrV][pqPavedRoad]) {
//         dp[arrV][pqPavedRoad] = totalW;
//         pq.add([totalW, arrV, pqPavedRoad]);
//       }

//       if (pqPavedRoad + 1 <= K && pqW < dp[arrV][pqPavedRoad + 1]) {
//         dp[arrV][pqPavedRoad + 1] = pqW;
//         pq.add([pqW, arrV, pqPavedRoad + 1]);
//       }
//     }
//   }
//   return dp;
// };

// const [start, destination] = [1, N];
// const result = dijkstra(start);
// console.log(Math.min(...result[destination]));
