
> JAVA에서 DB커넥션 할 때 사용하는 방법 : JDBC, JNDI, DBCP

## Connection Pool (DBCP)
: 데이터베이스와 연결된 커넥션을 미리 만들어서 풀(pool) 속에 저장해 두고 있다가 필요할 때 커넥션을 풀에서 쓰고 다시 풀에 반환하는 기법을 말한다.   
: 미리 생성해두기 때문에 데이터베이스에 부하를 줄이고 유동적으로 연결을 관리 할 수 있다.  
: 웹 프로그램에서는 데이터베이스의 환경설정과 연결 관리 등을 따로 XML파일이나 속성 파일을 사용해서 관리하고, 이렇게 설정된 정보를 이름을 사용하여 획득하는 방법을 사용  
: 동시 접속자가 가질 수 있는 커넥션을 하나로 모아놓고 관리한다는 개념(남아있는 커넥션이 없는 경우라면 해당 클라이언트는 대기 상태로 전환)  
: JDBC를 이용하여 생성한 커넥션의 효율성을 높이기 위해 커넥션 객체를 관리하는 것  

## JDBC ( Java DataBase Connectivity)
: 데이터베이스를 조작하는 표준 SQL 인터페이스 API  
: 일반적인 JDBC는 데이터베이스풀 방식을 사용하지 않고 DB에서 정보를 가져올때마다 매번 디비연결을 열고 닫는다.

## JNDI (Java Naming and Directory Interface)
: 데이터나 객체를 발견하고 참고하고 위한 자바 API  
: WAS단에 데이터베이스 커넥션 객체를 미리 네이밍 해두는 방식  
-> WAS단에 설정정보를 저장해놓으면 디비가 몇개 붙었는지, DB설정정보를 파악하기 쉽다.  


> JDBC는 데이터베이스 커넥션 인터페이스 이다.  
> DBCP는 DB커넥션을 어플리케이션 소스 내에서 제어하면서 DB풀을 가진다.  
> JNDI는 DB커넥션을 WAS단에서 제어하면서 서버에서 하나의 커넥션 풀을 가진다.  






