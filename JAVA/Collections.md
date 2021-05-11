## reverse
: 내림차순 정렬

## shffle
: 뒤섞기  
: 비복원 추출이르모 중복 걱정 안해도 된다

## sort
: 오름차순 정렬  
: ArrayList일때 정렬 하는 방법  
(Arrays.sort는 배열을 정렬해줄 때 사용)

```java
		List<String> friends = new ArrayList<>();
		friends.add("철수");
		friends.add("영희");
		friends.add("영수");
		friends.add("민지");
		friends.add("미영");
		friends.add("민수");
		
		Collections.shuffle(friends);
		
		//1.무작위로 섞인 friends 저장소에서 데이터 2개 추첨 = String 2개 추첨
		//2.무작위로 섞인 friends 저장소에서 데이터 2개 묶을을 추첨 = List<String> 추첨
		//=>같은 말이지만 자료형이 다르다
		/*1.
		String a =friends.get(0);
		String b = friends.get(1);
		System.out.println(a);
		System.out.println(b);
		*/
		List<String> sub = friends.subList(0, 2);
		System.out.println(sub);
```
