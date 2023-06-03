function bf(start) {
  // 시작 노드에 대해서 초기화
  dist[start] = 0;
  // 전체 n번의 라운드(round)를 반복
  for (let i = 0; i < n; i++) {
    // 매 반복마다 "모든 간선"을 확인하며
    for (let j = 0; j < m; j++) {
      let [cur, nextNode, cost] = edges[j];
      // 현재 간선을 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if (dist[cur] != INF && dist[nextNode] > dist[cur] + cost) {
        dist[nextNode] = dist[cur] + cost;
        // n번째 라운드에서도 값이 갱신된다면 음수 순환이 존재
        if (i == n - 1) return true;
      }
    }
  }
  return false;
}
