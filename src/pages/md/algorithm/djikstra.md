---
title: "다익스트라 Dijkstra 알고리즘 [Python]"
date: "2021-03-18"
folder: "algorithm"
tags: ["다익스트라 알고리즘", "algorithm", "우선순위 큐"]
---

## 다익스트라
 - Graph에서 원하는 노드 `start node` 에서, 특정 노드 `target node` 까지 가는 최소비용 찾는 알고리즘
 
 1. 우선순위 큐
  우선순위 큐를 이용하면 가장 작은 비용의 값만 `pop()` 할 수 있다.
  이를 이용해서 작은 비용의 값만을 비교해서 `traget node` 까지 이을 수 있는 방법을 찾으면 된다.
  (최단 거리만 계속해서 갱신하기)
  
  
  
  ---
```py
import heapq


def dijkstra(graph, start):
    distances = { node: float('inf') for node in graph }
    distances[start] = 0
    
    queue = []
    
    heapq.heappush(queue, [distances[start], start]) # [비용, 노드]
    
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if current_distance > distances[current_node]:
            continue
            
        for new_node, new_distance in graph[current_node].itmes():
            distance = current_distance + new_distance
            if distance < distances[new_node]:
                distances[new_node] = distance
                heapq.heappush(queue, [distance, new_node])
                
                
    return distances
```