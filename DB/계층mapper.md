장점 - 데이터가 적을 때는 굉장히 빠르지만 많을 때는 비효율적이다
```xml
<select id="selectTagList" parameterType="java.util.HashMap" resultMap="tagMap" >
      select
        ???
    from 	???
    where 1 = 1
    <if test="??? != null">
      and ??? = #{???}
    </if>
</select>


<resultMap id="tagMap" type="com.test">
    <result property="a" column="a" javaType="int"/>
    <collection property="values" column="a" select="selectTagValueListWithTagId"/>
</resultMap>


<select id="selectTagValueListWithTagId" parameterType="java.util.HashMap" resultMap="selectTagValueMap">
    select
        ???
    from ???
    where ???;
  </select>
```
