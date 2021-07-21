딕셔너리는 Key와 Value를 한 쌍으로 갖는 자료형  
{Key1:Value1, Key2:Value2, Key3:Value3, ...}  

```python
dic = {'name':'yerim', 'age':25, 1:"test"}
print(dic['name'])
print(dic.keys())
print(dic.values())

for k in dic.keys():
    print(k)
    
print(dic[2])             -> key error
print(dic.get(2,'없음'))  -> 없음
print(4 in dic)           -> false

```
