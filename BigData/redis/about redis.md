## redis(remote dictionary server)
  
 키-값 구조의 비정형 데이터를 저장하고 관리하기 위한 오픈소스 기반의 비관계형 데이터베이스 관리 시스템 (NoSQL). 
  
- 장점
: 처리 속도가 빠르다.   
: 데이터가 메모리 + Disk에 저장된다. (in-memory 방식).   
: 만료일을 지정하여 만료가 되면 자동으로 데이터가 사라진다.    
: 저장소 메모리를 재사용하지 않는다.     
: String, Sets, Sorted Sets, Hashs, Lists 지원.  
   
- 단점 
큰 용량의 데이터를 담기엔 공간 제약이 크다.   
=> 실시간 처리는 인메모리에서, 보관은 디스크 기반 스토리지에서.   
   
## Redis 통신. 
Spring Data Redis 라이브러리 이용.   
Redis는 RedisTemplate을 통해서 Redis 서버와 통신을 합니다.     

### key 
: 일치하는 모든 키를 반환한다.    
: 시간 복잡도 - O(n).   
```
redisTemplate.keys("refresh_*_".concat(template_seq));    
```

### Hash 
```
redisTemplate.opsForHash().get(key, hashKey); //해시 키에서 특정 키의 값을 가져오는 데 사용.   
redisTemplate.opsForHash().put(key, hashKey, value); //새로운 값 추가.    
redisTemplate.opsForHash().entries(key); //해시 키에 포함된 모든 키와 값을 가져오는 데 사용되며 Map과 함께 반환.   
redisTemplate.delete(key);    
```

### String  
```
Object object = redisTemplate.opsForValue().get(key); //키 값에 대응하는 값 추출.   
```

### Redis channel Subscribe
```
ChannelTopic topic = new ChannelTopic("alarm-notification-sync");
redisTemplate.convertAndSend(topic.getTopic(), "");
    ```
