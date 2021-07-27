---
title: "[프로그래머스 LV3] 가장 긴 팰린드롬"
date: "2021-03-26"
folder: "algorithm"
tags: ["파이썬", "알고리즘", "algorithm", "python", '프로그래머스']
---
[![문제설명](https://images.velog.io/images/jwisgenius/post/5315e8d0-133b-47d0-beba-ced1291f047a/image.png)](https://programmers.co.kr/learn/courses/30/lessons/12904)


## 접근방법
 S의 길이가 n이라고 할 때, `0부터 N - 1 까지 의 문자열` 이 가장 긴 문자열이다. 
 즉, `0부터 N-1, N-2, N-3, ... , 0 까지`, `1부터 N-1, N-2, ... , 1 까지` ⋯⋯ `N부터 N까지` 이런 식으로 반복하며, 각각의 문자열이 펠린드롬인지 확인해주면 된다. answer 값에 문자열의 길이를 변경하며 가장 긴 길이를 구한다.
 
```py
def solution(s):
    answer = 1
    for i in range(len(s)):
        for j in range(len(s), i, -1):
            # 문자열의 길이가 현재 저장된 문자열의 길이보다 짧으면 break
            # 어느 순간, j - i 가 변경되지 않아도 그냥 answer보다 짧아지는 경우도 break로 연산을 막는다
            if j - i < answer: 
                break
                        
            if s[i:j] == s[i:j][::-1]:
                answer = j - i
                break
            

    return answer
```