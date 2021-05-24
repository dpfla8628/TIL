## 영속성(persistence)
: 데이터를 생성한 프로그램의 실행이 종료되더라도 사라지지 않는 데이터의 특성
   
```xml
<persistence>
	<persistence-unit name="defaultDbPersistence">
		<description>Database for DbCollector</description>
		<provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>
		<properties>
			<property name="javax.persistence.jdbc.driver" value="org.mariadb.jdbc.Driver" />
			<property name="javax.persistence.jdbc.url" value="jdbc:mariadb://localhost:????" />
			<property name="javax.persistence.jdbc.user" value="유저" />
			<property name="javax.persistence.jdbc.password" value="비번" />
      ....
		</properties>
	</persistence-unit>
</persistence>
```

