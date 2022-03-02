```xml
<select id = "a" resultMap="b">
  select 
    a,b, c as hash 
  from 
    table 
</select>
-----
<resultMap id ="b" type="com.project.dto">
  <result property="hash" column="hash" typeHandler="com.project.handler.HashHandler">
</resultMap>
```

```java
public class HashHandler implements TypeHandler<HashMap<String, Integer>>{

  private ObjectMapper objectMapper = new ObjectMapper();

  @Override
  public void setParameter(PreparedStatement preparedStatement, int i, HashMap<String, Integer> tags, JdbcType jdbcType) throws SQLException {

  }

  @Override
  public HashMap<String, Integer> getResult(ResultSet resultSet, String s) throws SQLException {

    try {
      String tags = resultSet.getString(s);
      if( tags != null )
        return objectMapper.readValue(tags, new TypeReference<HashMap<String, Integer>>(){});
      else
        return null;
    } catch (IOException e) {
      e.printStackTrace();
    }

    return new HashMap<>();
  }

  @Override
  public HashMap<String, Integer> getResult(ResultSet resultSet, int i) throws SQLException {

    try {
      String tags = resultSet.getString(i);
      if( tags != null )
        return objectMapper.readValue(tags, new TypeReference<HashMap<String, Integer>>(){});
      else
        return null;
    } catch (IOException e) {
      e.printStackTrace();
    }

    return new HashMap<>();
  }

  @Override
  public HashMap<String, Integer> getResult(CallableStatement callableStatement, int i) throws SQLException {

    try {
      String tags = callableStatement.getString(i);
      if( tags != null )
        return objectMapper.readValue(tags, new TypeReference<HashMap<String, Integer>>(){});
      else
        return null;
    } catch (IOException e) {
      e.printStackTrace();
    }

    return new HashMap<>();
  }
}

```
