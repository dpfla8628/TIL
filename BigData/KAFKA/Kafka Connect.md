+) 데이터 파이프라인 (data pipeline) 이란?    
데이터를 생성해서 무사히 저장하기까지 일련의 과정    
    
### Kafka Connect
: 반복적인 파이프라인 생성에 매우 효율적   
: 커넥터를 동작하도록 실행해주는 프로세스    
- 단일 모드(Standalone)     
  : 하나의 Connect만 사용(개발용)   
- 분산 모드(Distributed)   
  : 여러개의 프로세스를 한개의 클러스터로 묶어서 운영   
  : 특정 Connect가 장애가 발생해도 나머지 Connect가 대신 처리하도록 함    
  
conf에 jar파일의 위치를 지정하고 실행한다     
    
### Kafka Connector
: DB의 데이터를 처리하는 코드가 담긴 jar 파일   
- sink connector   
  : data source에 담긴 데이터를 topic에 담는 역할(Producer)을 하는 connector   
- source connector   
  : topic에 담긴 데이터를 특정 data source로 보내는 역할(Consumer 역할)을 하는 connector    
  
 #### mysql 사용 방법
 1. kafka 설치
 2. connect 설치
 3. connector 설치
 4. mysql connector 설치
 5. test 테이블 생성
 6. Postman을 통해 Source Connector 생성
 7. "Sink Connector 생성   
https://cjw-awdsd.tistory.com/53
 
