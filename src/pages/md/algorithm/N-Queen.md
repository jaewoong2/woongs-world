---
title: "N-queens[Python]"
date: "2021-03-16"
folder: "algorithm"
tags: ["N-queens", "algorithm", "python"]
---


## N-Queens

> N개의 여왕을 N X N 체스판에 잡아 먹히지 않도록 놓는 방법 의 수를 찾기. (여왕은 대각선, 같은행, 같은열에 있는 것들을 먹어 치운다)


### 풀이방법
1. N개의 여왕을 각각 N개의 행에 자리를 준다.

2. 2번째 열부터 대각선에 여왕이 있는지, 같은열에 여왕이 있는지 검사한다.

3. 재귀호출을 통해 탐색하고 싶은 행을 1 늘린다.

4. 현재 행의위치가 N이 되면 모든 여왕이 자리를 잡은 것이기 때문에 `count + 1` !!

-----    
```py
def n_queen(n, now_row, cols):
    if now_row == n:
        return 1
    
    count = 0
    
    # 현재 탐색하고 있는 row에 0~n까지 col의 위치를 넣어준다. (대각선, 같은 열에 여왕이 없을 때)
    # 0~n개의 경우의 수를 다 확인하는 방법. 조건에 맞지 않으면 재귀 호출 X
    for now_col in range(n): 
        if is_promising(now_col, now_row, cols):
            cols[now_row] = now_col
            count += n_queen(n, now_row + 1, cols)
            
    return count
    
def is_promising(now_col, now_row, cols):
    for prev_row in range(now_row):
        # 대각선 여부
        if abs(cols[prev_row] - now_col) == now_row - pre_row:
            return False
        # 같은 열에 여왕이 있는지 여부
        if cols[prev_row] == now_col:
            return False
            
        return True
    
    
n_queen(N, 0, [0 for _ in range(N)])
```
