---
title: "[프로그래머스 LV3] 가장 먼 노드"
date: "2021-03-26"
folder: "algorithm"
tags: ["파이썬", "알고리즘", "algorithm", "python", "bfs", '그래프', '프로그래머스']
---
[![프로그래머스- 가장 먼 노드](https://images.velog.io/images/jwisgenius/post/89f84e3d-3a8b-4ac5-ae11-a1ad94445b4f/image.png)](https://programmers.co.kr/learn/courses/30/lessons/49189)


## 접근방법
 1. 가장 먼 노드란, 자신밑에 하위노드가 없는 노드가 아니라 `1 에서 가장 먼 노드` 를 의미한다.
 
 2. 각 노드가 1로부터 얼마나 떨어져 있는지 알면 쉬움.
 
 3. `BFS` 를 사용해서 각 노드가 얼마나 떨어져 있는지 확인하자. `(현재 노드까지의 거리 = 이전 노드의 거리 + 1)`


```py
from collections import deque
def solution(n, vertex):
    graph = {} # Graph를 그려줘야한다, 매개변수 vertex는 단뱡향으로 주어졌지만, 사실 양방향으로 확인가능하다.

    for from_, to_ in vertex:
        if from_ in graph:
            graph[from_].append(to_)
        else:
            graph[from_] = [to_]

        if to_ in graph:
            graph[to_].append(from_)
        else:
            graph[to_] = [from_]

    start = 1 #최상단 노드 = 1
    distances = [0] * (n + 1) # 1~N노드의 (1과 의) 거리를 나타내는 List 각 위치에 있는 값은 1까지와의 거리를 나타낸다
    queue = deque([start])
    visit = [False] * (n + 1)
    visit[start] = True

    while queue:
        v = queue.popleft()
        for node in graph[v]:
            if not visit[node]:
                distances[node] = distances[v] + 1 # `현재 노드까지의 거리 = 이전 노드의 거리 + 1`
                queue.append(node)
                visit[node] = True

    return len([x for x in distances if x == max(distances)]) # `가장 거리가 긴 노드와 같은 노드의 갯수만 확인`
```

---

## 반성
 1. `distances` 변수는 다른 사람의 풀이를 보고 나서 따라한것.
	- ### 원래는 어떻게?
      - `queue = [[ Level이 같은 노드들 ]]` 이런식으로 같은 거리에 있는 노드를 `queue`에 넣어주었다.
      
      - 같은 거리에 있는 각 노드가 갖고 있는 다음 노드들을 `temp` 변수 에 넣어주고 모두 `temp` 변수에 들어오면
      `queue` 에 넣어주었다.
      
      - 만약, `queue` 에 있는 모든 노드를 돌았을 때도 어느 노드도 다음 노드를 갖고 있으면, 그 queue에 마지막으로 남은 level의 노드들이 `가장 먼 노드` 로 해서 정답을 제출하였다.
      
      
     - 근데, distances를 선언해서 푼 방법(2중 반복문) 보다 반복문을 하나더 추가한(3중 반복문) 반복문이 훨씬 빠르게 풀렸다. 
     
     - 그래도 `distances` 선언하는 것이 좀 더 직관적이고 코드가 깔끔하므로 이런식의 풀이가 좀더 정석에 가까운듯!
     