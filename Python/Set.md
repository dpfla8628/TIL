```python
#집합 자료형 : 순서x 중복x

# 교집합
s1 = set([1,2,3])
s2 = set([3,4,5])
print(s1 & s2) -> {3}

# 합집합
print(s1 | s2) -> {1, 2, 3, 4, 5}

# 추가
s1.add(7)
print(s1) -> {1, 2, 3, 7}

#여러개 추가
s1.update([1,8,7])
print(s1) -> {1, 2, 3, 7, 8}

# 삭제
s1.remove(7)
print(s1) -> {1, 2, 3, 8}

```
