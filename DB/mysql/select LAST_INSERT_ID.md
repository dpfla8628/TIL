insert후 생성된 pk id를 바로 select해서 해당 id를 통해 insert하고자 할 때 사용하는 방법
```mysql
  <insert id="insertId" parameterType="java.util.HashMap" useGeneratedKeys="true" keyProperty="Id">
    insert into table ()
    values ()
    <selectKey resultType="integer" keyProperty="Id" order="AFTER">
      select LAST_INSERT_ID()
    </selectKey>
  </insert>
```
```java
      HashMap<String, Object> spec = ~~;
      Mapper.insertId(spec);
      Object Id = spec.get("Id");
      
      Mapper.insertSecond(spec);
```
