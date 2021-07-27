---
title: "[프로그래머스 LV3] 디스크 컨트롤러"
date: "2021-03-20"
folder: "algorithm"
tags: ["파이썬", "알고리즘", "algorithm", "python", "힙", "heap"]
---

[프로그래머스- 디크스컨트롤러](https://programmers.co.kr/learn/courses/30/lessons/42627)

## 접근방법
1. 가장 빠르게 하기(평균 대기시간이 가장 적게) 위해서는 현재 요청을 할 수 있는 것들 중에서 가장 비용이 작은 것을 실행 시키면 된다.

2. 가장 시간이 작은 것을 사용하기 위해서는 `우선순위 큐` `heapq` 를 사용할 것이다.
   - `hepaq.heappop()` 은 배열의 가장 첫번째 원소의 가장 작은 것을 반환하기 때문에 `처리가능한 목록` 에 `[처리 비용, 요청 시간]` 의 순으로 넣는다.

3. `처리가능한 목록` 에서 가장 비용이 작은 것을 빼주고, `처리 비용` 을 현재 시간에 더해준다.

4. 만약, `처리 가능한 목록`이 비어있으나, 처리해야할 것들 `jobs` 이 있으면 요청시간이 가장 가까운 것을 `처리 가능한 목록에 넣는다`
   - 그리고 현재 시간을 가장 가까운 요청시간으로 바꿔준다.

5. `평균 대기시간(요청되고 처리 될때까지)` 을 구하기 위해서 `result` 변수에 `현재 시간 - 요청시간` 을 더해준다.

6. return 값으로 `result // length` 을 해준다.

-----

```py
def solution(jobs):
    import heapq
    length = len(jobs)
    result = 0
    time = 0
    tasks = []

    while jobs or tasks:
        if len(tasks) == 0:
            jobs.sort(reverse= True)
            job = jobs.pop()
            time = job[0]
            heapq.heappush(tasks, [job[1], job[0]])

        else:
            t, n = heapq.heappop(tasks)
            time += t

            temp = [i for i in range(len(jobs)) if jobs[i][0] <= time]

            for num in temp:
                heapq.heappush(tasks, [jobs[num][1], jobs[num][0]])

            jobs = [jobs[i] for i in range(len(jobs)) if jobs[i][0] > time]

            result += (time - n)

    return result // length
```