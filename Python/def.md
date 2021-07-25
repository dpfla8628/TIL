## 내장함수 vs 사용자 정의 함수
1. input(), print() ,...
2. def ...

## 여러개의 입력값과 매개변수

```python
# 여러개 입력값의 합
def sum_arr(*args):
    sum=0
    for i in args:
        sum+=i
    return sum
print(sum_arr(1,2,3,4,5))



# 키워드 파라미터
# 매개변수 이름 앞에 **을 붙이면 매개변수 kwargs는 딕셔너리가 되고 모든 key=value 형태의 결괏값이 그 딕셔너리에 저장된다.
def print_kwargs(**kwargs):
    print(kwargs)
print_kwargs(a=1)                 =>{'a': 1}
print_kwargs(name='foo', age=3)   =>{'name': 'foo', 'age': 3}



# 여러개의 return
def sum_and_mul(a,b):
    return a+b,a*b,a-b

print(sum_and_mul(1,2))         =>(3, 2, -1)
print(sum_and_mul(1,2)[0])      =>3

```

(주의사항)  
함수 내에 사용하는 변수는 지역변수라는 개념으로 불리며  
기존 변수에 영향을 미치지 않는다.  
```python
a=1
def vartest(a):
    a+=1
vartest(a)
print(a)

=>1

==============

a=1
def vartest(a):
    a+=1
    return a
a=vartest(a)
print(a)

=>2

===============

#global 전역 변수 사용하기 
a=1
def vartest():
    global a
    a+=1
vartest()
print(a)
```

## lamda함수

```python
def add(a,b):
  return a+b
#==
add=lambda a,b : a+b


myList = [lambda a,b:a+b, lambda a,b: a*b]
print(myList[0](1,2))                       => 3
  
```

## print 추가 설명
```python
for i in range(10):
  print(i, end=" & ") => 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 &
  
```

## 파일 읽고 쓰기 - open()
```python
# 상대경로 파일 생성 및 쓰기 ='w'
f = open("새파일.txt", 'w', encoding="UTF-8")
for i in range(1,11):
    data="%d번째 줄입니다.\n" %i
    f.write(data)
f.close()

# 읽기 (혹은 read()) ='r'
f = open("새파일.txt", 'r', encoding="UTF-8")
while True :
    line = f.readline()
    if not line : break
    print(line.strip("\n")
f.close()

# 내용 추가하기 = 'a'

```



