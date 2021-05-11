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
---------
## Comparator
: 별도의 정렬 방식을 구현한다  
: return값-> 0 - 현상 유지/ 양수 - 두 자리 바꾸기/ 음수 - 두자리 유지  
: 인터페이스의 메소드가 1개뿐이므로 람다형식 사용 가능  

> 매개변수가 한개 이상일 때 예시
```java
		List<Member> mem = new ArrayList<>();
		
		mem.add(new Member("tester", "test1234"));
		mem.add(new Member("master", "master1234"));
		mem.add(new Member("user", "user1234"));
		mem.add(new Member("admin", "admin1234"));
		
		System.out.println(mem.size());
		
		//Collections.sort(list); //Member를 어떻게 정렬해야할지 몰라서 오류
		
		//o1 - the first object to be compared.
		//o2 - the second object to be compared.
		//임의의 객체 두개를 매개변수로 잡고, 차례로 둘씩 비교해가며 정렬을 한다
		//여기에서는 Member의 매개변수가 두개이므로 id와 pass중 어떤것을 비교할지 모르니까
		//아이디끼리 비교해라!! 라는 의미로 a.getId()랑 b.getId()를 비교해서 오름차순한다
		
		Comparator <Member> c = (a,b)->a.getId().compareTo(b.getId());
		Collections.sort(mem,c);
		
		for(int i=0; i<mem.size(); i++) {
			System.out.println("아이디 : "+mem.get(i).getId());
			System.out.println("비밀번호 : "+mem.get(i).getPas());
		}
		
```
> 숫자 정렬 예시
```java
		Comparator<Integer> c = (a,b) ->b-a;
		Set <Integer> lotto = new TreeSet<>(c);
		
		for(int i =0; i<7; i++) {
			lotto.add((int)(Math.random()*45)+1);
		}
		
		//:lotto에 있는 데이터들을 한바퀴에 한 개씩 n이라는 변수에 담아주세요
		//(전체반복) 확장 반복문
		for(int n : lotto) {
			System.out.println(n);
		}	
```
