# String vs StringBuffer/StringBuilder
불변 vs 가변성  
=> 문자열의 추가, 수정, 삭제가 빈번하게 발생하는 경우에는 후자를 사용하자  
특히 문자열을 합치는데 string+=""보다 더 효율적이다.  
  
## StringBuffer
- 동기화o, 잠금 장치가 있다  
- 멀티쓰레드 환경에서 안전하다  
- 잠금,풀림을 해야하기 때문에 느리다  
  
```java
		StringBuffer buffer = new StringBuffer();
		
		for(int i=0; i<10000; i++) {
			buffer.append("hello");
			buffer.append("\n");
		}
		System.out.println(buffer.toString());//문자열로 바꿔서 출력해라
```
  
## StringBuilder
- 동기화x, 잠금 장치가 없다
- 멀티쓰레드 환경에서 불안전하다.
- 단일쓰레드에 적합하여 빠르다

   
```java
		StringBuilder buffer = new StringBuilder();
		
		for(int i=0; i<10000; i++) {
			buffer.append("hello");
			buffer.append("\n");
		}
		System.out.println(buffer.toString());//문자열로 바꿔서 출력해라	
```

----
> 비교
- String          :  문자열 연산이 적고 멀티쓰레드 환경일 경우
- StringBuffer    :  문자열 연산이 많고 멀티쓰레드 환경일 경우
- StringBuilder   :  문자열 연산이 많고 단일쓰레드이거나 동기화를 고려하지 않아도 되는 경우
