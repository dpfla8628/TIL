참고 사이트  
[https://docs.jboss.org/hibernate/orm/5.4/userguide/html_single/Hibernate_User_Guide.html](https://docs.jboss.org/hibernate/orm/5.4/userguide/html_single/Hibernate_User_Guide.html)

# * Dialect  
  
JPA는 어플리케이션이 직접 JDBC 레벨에서 SQL을 작성하는 것이 아닌 JPA가 직접 SQL을 작성하고 실행하는 형태입니다. 그런데, DBMS 종류별로 사용하는 SQL 언어가 조금씩 다르다면, 다른 부분에 대한 대처가 필요할 것입니다. 
그리고 제품(어플리케이션)을 개발하는데 있어서, 각각 DBMS 벤더별로 다른 모듈을 개발해 주어야 합니다. 만약 고객의 요구에 따라 오라클 DB를 기준으로 작성했던 게시판 프로그램을 MS-SQL에 맞게 추가적으로 개발하려면 엄청난 비용이 들어갈 것입니다.
그러나 개발자는 JPA를 이용함에 있어서 쿼리를 작성할 필요도 없고, JPA를 사용하더라도 각 DBMS별로 조금씩 다른 SQL 방언을 걱정할 필요도 없습니다. JPA에서는 이를 Dialect라는 추상화된 방언 클래스를 제공하고 각 벤더에 맞는 구현체를 제공하고 있습니다.
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f78cb65-7e67-4666-a111-400d507c7a32/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f78cb65-7e67-4666-a111-400d507c7a32/Untitled.png)
  
JPA에서는 설정을 통해 원하는 Dialect만 설정해주면 해당 Dialect를 참고하여 그에 맞는 쿼리를 생성합니다. 따라서 개발시에는 Oracle DB에 맞게 설정하고 어플리케이션을 개발하다가 실제 고객의 환경이 SQL SERVER를 사용중이라면 설정만 SQLServerDialect로 변경해 줌으로써 불필요한 변경에 대한 자원 소모를 줄일 수 있습니다.
하이버네이트의 경우에는 설정파일인 persistence.xml의 hibernate.dialect 설정값을 바꾸어 주면 됩니다
    
    
# jpa와의 차이점  
  
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09c1aa89-a313-4de8-8fb5-b6c3b048dd86/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09c1aa89-a313-4de8-8fb5-b6c3b048dd86/Untitled.png)
JPA의 핵심인 EntityManagerFactory, EntityManager, EntityTransaction을 Hibernate에서는 각각 SessionFactory, Session, Transaction으로 상속받고 각각 Impl로 구현하고 있음을 확인할 수 있다. “Hibernate는 JPA의 구현체이다”로부터 도출되는 중요한 결론 중 하나는 JPA를 사용하기 위해서 반드시 Hibernate를 사용할 필요가 없다
  
  
# Hibernate란?  
  
Hibernate ORM은 자바 언어를 위한 객체 관계 매핑 프레임워크이다.
간단히 말해 관계형 디비 테이블을 자바 객체로 맵핑 시켜 사용하겠다는 것이다.
HQL(Hibernate Query Language)이라 불리는 매우 강력한 쿼리 언어를 포함하고 있다  
  
- 설정  

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE hibernate-configuration SYSTEM
"http://www.hibernate.org/dtd/hibernate-configuration-3.0.dtd">

 
    <hibernate-configuration>
        <session-factory>
            <property name="hibernate.connection.driver_class">com.mysql.jdbc.Driver</property>
            <property name="hibernate.connection.password">dbapasword</property>
            <property name="hibernate.connection.url">jdbc:mysql://192.168.0.49:3306/DATABASE_NAME?useSSL=false&amp;characterEncoding=UTF-8</property>
            <property name="hibernate.default_schema">DATABASE_NAME</property>
            <property name="hibernate.connection.username">dba</property>
           
            <property name="hibernate.connection.CharSet">UTF-8</property>
            <property name="hibernate.connection.characterEncoding">UTF-8</property>
            <property name="hibernate.connection.useUnicode">true</property>

            <property name="dialect">org.shh.db.MySQL57Dialect</property>
						
						<!--테이블 매핑-->
						<mapping class="org.onecellboy.db.hibernate.table.Person"/>

        </session-factory>
    </hibernate-configuration>
```

- 초기화  

```java
SessionFactory sessionFactory = null;
StandardServiceRegistry registry = null; 

registry = new StandardServiceRegistryBuilder().configure(new File("hibernate 설정 파일 경로")).build();
sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
```

- 쿼리 실행  

```java
Session session = sessionFactory.openSession();
Transaction tx=null; 
tx = session.beginTransaction();
session.saveOrUpdate(obj);
tx.commit();
session.close();
```
