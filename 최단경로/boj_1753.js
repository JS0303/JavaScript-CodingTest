import dijkstra from "./dijkstra";

// 코드 출처 : https://velog.io/@ywc8851/%EB%B0%B1%EC%A4%80-1753-%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C-javascript
// let file = require("fs").readFileSync("/dev/stdin");
// let input = file.toString().split("\n");

// let INF = 1e9; // 무한을 의미하는 값으로 10억을 설정
// // 노드의 개수, 간선의 개수를 입력받기
// let [n, m] = input[0].split(" ").map(Number);
// let start = Number(input[1]); // 시작 노드 번호
// // 각 노드에 연결되어 있는 노드에 대한 정보를 담는 배열 만들기
// let graph = [];
// for (let i = 0; i <= n + 1; i++) graph.push([]);
// // 모든 간선 정보를 입력받기
// for (let i = 2; i <= m + 1; i++) {
//   let [a, b, c] = input[i].split(" ").map(Number);
//   // a번 노드에서 b번 노드로 가는 비용이 c라는 의미
//   graph[a].push([b, c]);
// }
// // 최단 거리 테이블을 모두 무한으로 초기화
// let distance = new Array(n + 1).fill(INF);

// // 다익스트라 알고리즘을 수행
// dijkstra();
// // 모든 노드로 가기 위한 최단 거리를 출력
// for (let i = 1; i <= n; i++) {
//   // 도달할 수 없는 경우 무한(INF)이라고 출력
//   if (distance[i] == INF) console.log("INF");
//   // 도달할 수 있는 경우 거리를 출력
//   else console.log(distance[i]);
// }

// // 강사님 풀이
// let file = require("fs").readFileSync("/dev/stdin");
// let input = file.toString().split("\n");

// class minHeap {
//   heapArray = [];
//   constructor() {
//     this.heapArray.push(null);
//   }

//   push(data) {
//     if (this.heapArray === null) {
//       this.heapArray = [];
//       this.heapArray.push(null);
//       this.heapArray.push(data);
//     } else {
//       this.heapArray.push(data);
//       let inserted_idx = this.heapArray.length - 1;
//       let parent_idx = parseInt(inserted_idx / 2);
//       while (inserted_idx > 1) {
//         if (this.heapArray[inserted_idx][1] < this.heapArray[parent_idx][1]) {
//           const tmp = this.heapArray[inserted_idx];
//           this.heapArray[inserted_idx] = this.heapArray[parent_idx];
//           this.heapArray[parent_idx] = tmp;
//           inserted_idx = parent_idx;
//           parent_idx = parseInt(parent_idx / 2);
//         } else {
//           break;
//         }
//       }
//     }
//   }
//   move_down(pop_idx) {
//     const left_child = pop_idx * 2;
//     const right_child = pop_idx * 2 + 1;

//     if (left_child >= this.heapArray.length) {
//       return false;
//     } else if (right_child >= this.heapArray.length) {
//       if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
//         return true;
//       }
//       return false;
//     } else {
//       if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
//         if (this.heapArray[pop_idx][1] > this.heapArray[left_child][1]) {
//           return true;
//         }
//         return false;
//       } else {
//         if (this.heapArray[pop_idx][1] > this.heapArray[right_child][1]) {
//           return true;
//         }
//         return false;
//       }
//     }
//   }

//   pop() {
//     if (this.heapArray === null) {
//       return null;
//     } else {
//       const return_data = this.heapArray[1];
//       this.heapArray[1] = this.heapArray[this.heapArray.length - 1];
//       this.heapArray.pop();
//       let popped_idx = 1;
//       while (this.move_down(popped_idx)) {
//         const left_child = popped_idx * 2;
//         const right_child = popped_idx * 2 + 1;
//         if (right_child >= this.heapArray.length) {
//           if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
//             const tmp = this.heapArray[popped_idx];
//             this.heapArray[popped_idx] = this.heapArray[left_child];
//             this.heapArray[left_child] = tmp;
//             popped_idx = left_child;
//           }
//         } else {
//           if (this.heapArray[left_child][1] < this.heapArray[right_child][1]) {
//             if (this.heapArray[popped_idx][1] > this.heapArray[left_child][1]) {
//               const tmp = this.heapArray[popped_idx];
//               this.heapArray[popped_idx] = this.heapArray[left_child];
//               this.heapArray[left_child] = tmp;
//               popped_idx = left_child;
//             }
//           } else {
//             if (
//               this.heapArray[popped_idx][1] > this.heapArray[right_child][1]
//             ) {
//               const tmp = this.heapArray[popped_idx];
//               this.heapArray[popped_idx] = this.heapArray[right_child];
//               this.heapArray[right_child] = tmp;
//               popped_idx = right_child;
//             }
//           }
//         }
//       }
//       return return_data;
//     }
//   }
// }

// const [v, e] = input.shift().split(" ").map(Number);
// const start = +input.shift();
// const graph = Array.from({ length: v + 1 }, () => []);
// const distance = Array.from({ length: v + 1 }, () => Infinity);
// const visited = Array.from({ length: v + 1 }, () => false);
// const pq = new minHeap();

// input.forEach(i => {
//   const [from, to, weight] = i.split(" ").map(Number);
//   graph[from].push([to, weight]);
// });

// distance[start] = 0;
// pq.push([start, 0]);

// while (pq.heapArray.length > 1) {
//   const [curNode, dist] = pq.pop();
//   if (visited[curNode]) continue;

//   visited[curNode] = true;
//   for (let [nextNode, nextDistance] of graph[curNode]) {
//     if (distance[nextNode] > distance[curNode] + nextDistance) {
//       distance[nextNode] = nextDistance + distance[curNode];
//       pq.push([nextNode, distance[nextNode]]);
//     }
//   }
// }
// console.log(
//   distance
//     .map(i => (i === Infinity ? "INF" : i))
//     .slice(1)
//     .join("\n")
// );
