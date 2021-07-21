## 문자열 인덱스 슬라이싱  
- a[이상:미만:간격]
   
```python
a= "hello python"
print(a[-1])
```
|>>>n  
    
```python
a= "hello python"
print(a[0:4])
```
|>>>hello  
     
```python
a= "hello python"
print(a[::2])
```
|>>>hlopto  
  
## 문자열 포맷 코드
```python
>>> "I have %s apples" % 3
'I have 3 apples'
   
number = 10
day = "three"
>>> "I have %d apples %s day" % (number, day)
'I have 10 apples three day'
```
```python
>>> "I eat {0} apples".format("five")
'I eat five apples'
>>> "I eat {number} apples {name}".format(number=1, name="야호")
'I eat 1 apples 야호'
```

## 문자열 찾기
```python
a=hobby
print(a.find("h"))
```
|>>>0  
있으면? 해당 인덱스  
없으면? -1  

## 문자열 합치기
```
d=",".join("abcd")
print(d)
>>> a,b,c,d

d="|".join(["a","b","c","d"])
print(d)
>>>a,b,c,d
```

## 대소문자
.lower()  
.upper()  

## 공백 지우기
.strip()  

## 교체
.replace("원본", "바꾸는거")

## 나누기
.split() : 공백 기준  
.split("문자열")  
: 괄호를 기준으로 나눠서 리스트로 만들어준다.  
