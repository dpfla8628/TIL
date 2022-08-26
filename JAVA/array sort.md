1. sorting하고자하는 dto에 상속을 설정한다
 ```java
public class UserGroupDto implements Comparable<UserGroupDto> {
...
}
 ```
 2. 비교하는 메소드를 오버라이딩한다
```java
  @Override
  public int compareTo(UserGroupDto group) {
      return this.depth - group.depth; // sorting하고자하는 key

  }

```
3. 원하는 로직에서 해당 메소드를 사용한다
```java
    UserGroupDto[] userGroupList = userGroupList();
    Arrays.sort(userGroupList);
```
