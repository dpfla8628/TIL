## KAFKA?
분산 메세지 큐   
분산/실시간/대용량 처리 (producer -> customer). 

![스크린샷 2022-01-28 오전 10 57 00](https://user-images.githubusercontent.com/72377237/151473756-16ab6c27-32d4-4c64-86af-71e01bbe018e.png)
- 프로듀서(Producer)   
메시지를 생산하여 브로커의 토픽으로 전달하는 역할
- 브로커(Broker)   
카프카 애플리케이션이 설치되어 있는 서버 또는 노드를 지칭
- 컨슈머(Consumer)     
브로커의 토픽으로부터 저장된 메시지를 전달받는 역할
- 주키퍼(Zookeeper)         
클러스터링 작업  
분산 애플리케이션 관리를 위한 코디네이션 시스템   
분산된 노드의 정보를 중앙에 집중하고 구성관리, 그룹 네이밍, 동기화 등의 서비스 수행. 
(카프카 3버전 이후로는 필요 없어짐)
- 토픽(Topic)    
메시지를 논리적으로 묶은 개념(데이터베이스의 테이블 / 파일시스템의 폴더와 유사한 개념)  
프로듀서가 메시지를 보낼경우 토픽에 메시지가 저장됨.  
- 파티션(Partition)     
토픽을 구성하는 데이터 저장소이며 메시지가 저장되는 위치   
- 리플리케이션(Replication)
복제 (원본 파티션의 경우 '리더'가 되고, 복제 파티션의 경우 '팔로워'가 됨) 가용성을 위함    

### 실행
주키퍼 실행 : bin/zookeeper-server-start.sh ../config/zookeeper.properties   
카프카 실행 : bin/kafka-server-start.sh ../config/server.propertie  
## 토픽 명령어
토픽 생성 명령어 : ./kafka-topics.sh --create --bootstrap-server 192.168.100.242:9092 --replication-factor 1 --partitions 1 --topic test_3.1     
토픽 확인 명령어 : ./kafka-topics.sh --list --bootstrap-server 192.168.100.242:9092
