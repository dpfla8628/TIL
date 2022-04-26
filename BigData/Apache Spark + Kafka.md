## Apache Spark란?
빅 데이터 워크로드에 주로 사용되는 오픈 소스 분산 처리 시스템

## Kafka란?
분산 스트리밍 플랫폼이며 데이터 파이프 라인을 만들 때 주로 사용되는 오픈소스 솔루션   
![image](https://user-images.githubusercontent.com/72377237/127512643-8b083f0a-5554-4dab-bdbb-1fcbb36241dd.png)
- 프로듀서(Producer) : 데이터를 발생시키고 카프카 클러스터(Kafka Cluster)에 적재하는 프로세스
- 카프카 클러스터(Kafka Cluster) : 카프카 서버로 이루어진 클러스터 
- 컨슈머그룹(Consumer Group) : 컨슈머의 집합을 구성하는 단위. 카프카에서는 컨슈머 그룹으로서 데이터를 처리하며 컨슈머 그룹 안의 컨슈머 수만큼 파티션의 데이터를 분산처리
