## ORM(Object-Relational Mapping) 객체-관계 매칭
: 객체를 통해 간접적으로 데이터 베이스 데이터를 다루기 때문에 개발자가 프로그래밍에 더 집중할 수 있다.    
: 쿼리가 아닌 직관적인 코드로 데이터를 조작할 수 있다.  
: 스키마가 변경되었을 경우 Mybatis에서는 관련 DAO의 파라미터, 결과, SQL 등을 모두 확인하여 수정해야 하지만 JPA를 사용하면 이런 일들을 대신해준다.  
: 메서드 호출로 DB데이터를 조작하기 때문에 세밀함이 떨어진다.  
ex) JPA, Hibernate

## SQL Mapper
: sql 문장으로 직접 데이터베이스 데이터를 다룬다.  
: 데이터베이스 설정 변경 시 수정할 부분이 많고 특정 DB에 종속적이다.
ex) Mybatis

## JDBC
JDBC는 DB에 접근할 수 있도록 Java에서 제공하는 API이다. 모든 Java Data Access 기술의 근간으로 모든 Persistence Framework는 내부적으로 JDBC API를 사용한다.

