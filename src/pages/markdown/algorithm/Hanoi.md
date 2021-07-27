---
title: "하노이의 탑[Python]"
date: "2021-03-16"
folder: "algorithm"
tags: ["Hanoi", "algorithm", "python", "하노이의 탑"]
---

> 가운데 기둥을 이용해서 왼쪽 기둥에 놓인 크기가 다른 원판을 오른쪽 기둥으로 옮기는 문제,
이 때 원판은 한번에 한 개씩만 옮길 수 있으며, 작은 원판 위에 큰 원판이 놓일 수 없다.

재귀 풀이를 이용하여 푸는 문제중에서 가장 유명한 문제.

## 풀이 방법
### 1. 한번에 다 처리하지 말자
 - 그러면 어떻게?
    - 일반화를 하기 위해, 움직임을 포착하자.
    
    ![](https://media.vlpt.us/images/jwisgenius/post/c8db629f-3577-48cf-b9b9-e4015a9caf19/image.png)

    일단, 3개의 원판이 있을때, A기둥에서 C기둥으로 옮긴다고 하면, 2개의 원판을 B기둥으로 옮기고, 나머지 1개(가장 작은 것)를 C기둥으로 옮겨야한다.
      
       2개의 원판을 B기둥으로 옮기기 위해서 맨위의 1번째 원판을 C기둥으로 옮기고 2번째 원판을 B기둥으로 옮긴다음에, 다시 1번째 원판을 B기둥으로 옮긴다.
       
       이렇게 되면 A기둥에는 제일 큰 원판이 남는데, 그것을 C기둥으로 옮긴다.
       
       그리고 B기둥에 있는 것을 C기둥으로 옮기는 작업을 위와 같은 원리로 하면 된다.
       
       
       
     - 그러면, 위에서 말로 푼 것을 어떻게 일반화?
     
     ```css
     가장 중요한 것은 어떤 하나의 기둥(START) 에 있는 원판들을 C기둥(TARGET) 으로 옮겨야 할 때,  마지막의 원판만 C기둥으로 옮기기 위해서는 나머지 원판은 C기둥을 제외한 비어있는 원판(EMPTY == 6 - (start + target)으로 옮겨놔야 한다.
     ```
      
    즉, A기둥에 있는 원판 N개를 C기둥으로 옮기기 위해서는, 밑의 과정 을 모든 원판이 C기둥에 있을 떄까지 반복하면 된다.
      
```ruby
1. A기둥에 있는 N-1 개의 기둥을 B기둥으로 옮긴다.
     
2. A 기둥에 있는 1개의 기둥(맨 마지막 기둥) 을 C기둥으로 옮긴다.
     
3. B기둥으로 옮긴 N-1 개의 기둥을 C기둥으로 옮긴다.
```


```py
def hanoi(start, target, empty, array):
    if len(array) == 1:
        print(start, target)
        return

    hanoi(start, empty, target, array[:-1])
    hanoi(start, target, empty, [array[-1]])
    hanoi(empty, target, start, array[:-1])

hanoi(1, 3, 2, [i for i in range(n, 0, -1)])
```
