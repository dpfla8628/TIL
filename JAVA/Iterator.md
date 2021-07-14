Iterator는 자바의 컬렉션 프레임워크에서 컬렉션에 저장되어 있는 요소들을 읽어오는 방법을 표준화한 것이다.  

컬렉션 프레임워크란 데이터를 저장하는 클래스들을 표준화한 설계이다.  
데이터를 저장하는 구조에 따라 3가지 인터페이스로 구성된다. ( Set, List, Map )  
Iterator는 이런 집합체로부터 정보를 얻어낸다고 볼 수 있다.  

------

Iterator 메소드에는 hasNext(), next(), remove()가 있다.
  
- hasNext() : 읽어올 요소가 남아있는지 확인하는 메소드이다. 요소가 있으면 true, 없으면 false
- next() : 다음 데이터를 반환한다.
- remove() : next()로 읽어온 요소를 삭제한다.
   
메소드 호출 순서는 hasNext() -> next() -> remove()이다. 

  
```java
LinkedList<Integer> lnkList = new LinkedList<Integer>();

lnkList.add(4);
lnkList.add(2);
lnkList.add(3);
lnkList.add(1);

Iterator<Integer> iter = lnkList.iterator();

while (iter.hasNext()) {
    System.out.print(iter.next() + " ");
}

while (iter.hasPrevious()) {
    System.out.print(iter.previous() + " ");
}
```
```  
4 2 3 1    
1 3 2 4    
```  
