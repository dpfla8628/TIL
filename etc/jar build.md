- Artifacts 설정  
File > Project Structure  
Artifacts > + > JAR > From modules with dependencies  
Module과 Main Class 선택 > OK  
Output directory 선택 > OK  
- Build    
Build > Build Artifacts  
팝업이 뜨면 Action에서 Build 선택  
- 결과 확인  
out/artifacts/<프로젝트 이름>/<프로젝트 이름>.jar 파일 확인  

-------

- 자바 컴파일 -> 파일명.class 파일 떨어짐  
```javac 파일명.java  ```
  
- 자바 실행  
```java 파일명 ``` 
  
- 참조가 필요한 자바 컴파일  
```java -cp ".:./lib명.jar" 파일명.java ``` 
  
- 참조가 필요한 자바 실행  
```java -cp ".:./lib명.jar" 파일명  ```
