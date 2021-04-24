프로세스(process)란? 단순히 실행 중인 프로그램(program)  
스레드(Thread)란? 프로세스(process) 내에서 실제로 작업을 수행하는 주체   
멀티 스레드 ?  하나의 프로세스에서 여러 쓰레드로 나눠 수행하는 것   

ex) 경매시 최고가 long maxprice가 있을 때,    
입찰1 → thread →   
입찰2 → thread → servlet   ⇒ DeadLock발생     
입찰3 → thread →  

```java
public class Test{
	public /*syncronized*/ void MaxPrice(){
		if(bidprice>maxprice){
			maxprice=bidprice;}	
	}
}
```

문제점❓  
멀티스레드의 경우 동시에 데이터가 들어올 때 충돌이 난다  

### ❗해결 방안  

1. **synchronized** (직렬화)   

    : 하나만 처리한다 (=동기화)  
    : RW원자성(Atomicity)  

    ⇒ 멀티스레드의 동시접근을 막는다 ! 동시성 문제 해결  

    but 읽기 쓰기가 나누어져 있는 복잡하고 세세한 상황의 경우 에러 발생  

2. volatile   

    : RW원자성 보장 안됨  

3. **ReentrantLock**  
    lock, unlock  
   
   : RW원자성(Atomicity) 만족  

---

*Thread Safety : 병합시 안전하다  

*동기화란? 프로세스 또는 스레드들이 수행되는 시점을 조절하여 서로가 알고 있는 정보가 일치하는 것 ⇒ 충돌 방지  

- HashTable : 동기화(o) / Thread Safety(o)  
- HashMap : 동기화(x) / Thread Safety(x)  

---

### ReentrantLock vs ReentrantReadWriteLock  

### 1. **ReentrantLock**  

```java 
ReadWriteLock rwLock = new ReentrantLock();

public void SomeMethod () { 
rwLock .lock(); // 쓰레드에 락을 겁니다.(동기화의 시작) 
try { 동기화내용들... 
} catch (어떤예외들) { 해당예외처리... } 
finally { 
rwLock .unlock();} // 쓰레드의 락을 풉니다.(동기화 끝지점)
}

```

 :  시작점과 끝점을 수동적으로 설정이 가능한 명시적인 동기화(try, catch, finally)  

- 스레드가 데이터를 업데이트하지 않는 한 **여러 스레드가 동시에 데이터를 읽을 수 있습니다.**  
- 한 번에 하나의 스레드 만 데이터를 업데이트 할 수 있으므로 **쓰기 잠금이 해제 될 때까지 다른 스레드 (읽기 및 작성기 모두)가 차단**됩니다.  
- 다른 스레드가 읽는 동안 스레드가 데이터를 업데이트하려고하면 읽기 잠금이 해제 될 때까지 쓰기 스레드도 차단됩니다.  

synchronized와 문법적으로는 동일한 의미를 가지지만, ReentrantLock이 훨씬 세부적으로 동기화가 가능하다.  

가장 큰 차이점은 synchronized는 암묵적이고, ReentrantLock은 명시적이라는 것  

### 2. **ReentrantReadWriteLock**  

```java
ReadWriteLock rwLock = new ReentrantReadWriteLock();

Lock readLock = rwLock.readLock();
Lock writeLock = rwLock.writeLock();

readLock.lock();
try {
    // reading data
} finally {
    readLock.unlock();
}

writeLock.lock();
try {
    // update data
} finally { 
    writeLock.unlock();
}
```

- 읽기와 쓰기에 대한 잠금을 따로 가진다.  
- 스레드가 허용 또는 차단될 수 있는지 확인하므로 상대적으로 복잡하고 성능 저하를 가져온다.  
- 보안성이 더 뛰어나다는 장점이 있다.  
- ReadWriteLock의 구현체  
- 읽기/쓰기 잠금을 재귀적으로 여러 번 획득할 수 있다.  
- 읽기 잠금을 사용하여 읽기 작업을 수행하는 코드를 보호하고 쓰기 잠금을 사용하여 업데이트 작업을 수행하는 코드에 대한 액세스를 보호한다.  
