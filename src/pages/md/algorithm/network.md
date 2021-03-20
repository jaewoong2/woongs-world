---
title: "[프로그래머스 LV3] 네트워크"
date: "2021-03-20"
folder: "algorithm"
tags: ["파이썬", "알고리즘", "algorithm", "python", "DFS", "그래프"]
---

```md
### 문제 설명
> 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다. 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고, 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다. 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.

- 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.

- 제한사항
    1. 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
    2. 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
    3. i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
    4. computer[i][i]는 항상 1입니다.
-
```

### 접근 방법
 그래프 알고리즘 문제이다. 주제에 맞게 그래프를 그려서 문제를 풀이`DFS`.
 1. 매개변수로 들어오는 값을 모두 그래프로 만들어주자!
 
 2. 처음 탐색할 원소의 `index` 를 `stack` 에 넣어준다. `(0 으로 정함)`
     - `stack` 에서 `pop` 을 해주고 그 값과 연결 되어 있는 것을 `stack` 에 넣어줌
     -  만약 `stack` 이 비어있지만, 탐색해야할 `computers` 가 있으면,
     -  network 를 1 증가시켜주고 탐색해야할 `computers` 중 아무거나 넣어준다.

 3. 모든 원소를 다  `visit` 하면 탐색중지.


----

```py
def solution(n, computers):
    # 자신의 index를 빼고 연결되어 있는 것만 {node: [연결 되어 있는 것들]} 의 형태로 생성.
    graph = {node: [i for i in range(len(computers[node])) if node != i and computers[node][i] == 1] for node in range(len(computers))} 
    
    stack = [0] # 스택에 0(시작 값) 을 넣어준다.
    visit = [False] * len(computers) # visit =  ALL False
    visit[0] = True # visit[start] = True
    num_of_network = 1 # 네트워크들의 수 현재 시작값이 속해 있는 네트워크가 있으므로 1로 시작한다.

    while stack:
        v = stack.pop()

        # v와 연결된 것들은 같은 네트워크로 묶는다.
        for node in graph[v]:
            if not visit[node]:
                stack.append(node)
                visit[node] = True

        # 같은 네트워크로 묶일 것이 없으면, 방문하지 않은 node `한개` 를 찾아서 네트워크로 묶어준다/
        for node in graph:
            if not visit[node] and len(stack) == 0:
                num_of_network += 1
                stack.append(node)
                visit[node] = True
                break

    return num_of_network
```