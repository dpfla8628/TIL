## java.lang.Runtime
```java
    Runtime run = Runtime.getRuntime();
		
		try {
			run.exec("notepad.exe");
			run.exec("calc.exe");
			run.exec("cmd /c start http://www.naver.com");
		}
		catch(Exception e) {
			System.err.println("명령이 원활하게 실행되지 않았습니다");
			e.printStackTrace();
		}		
```
-----
## java.util.Data
```java
// "현재시간"을 가져온다
		Date a = new Date();
		System.out.println(a);
//원하는 형식으로 가져온다
    SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(f.format(a));
```

## java.util.Calendar
```java
    //문제 : 2020년 12 월 25일이 100일이 되는 시작 날짜를 구하세요
    Calendar c = Calendar.getInstance();
		c.set(2020,11,25);
		c.add(Calendar.DATE,-99);
		
		Date d = c.getTime();
		SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd");
		System.out.println(f.format(d));
```
- Calendar는 날짜변경과 계산에 특화
- Date는 날짜 출력이 쉽다
