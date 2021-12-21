Kubenates
https://dailyheumsi.tistory.com/208

## Controller
* ReplicationController (RC)
    * 지정된 숫자로 Pod 을 기동 시키고 관리한다.
    * selector, replicas, template 을 기본적으로 정의해야 한다.
        * selector : label 기준으로 어떤 Pod 들을 관리할지 정의한다.
        * replicas : 선택된 Pod 들을 몇 개의 인스턴스로 띄울지 정의한다.
        * template : Pod 을 추가로 기동할 때, 어떤 Pod 을 만들지 정의한다.
* ReplicaSet
    * ReplicationController 는 Equailty 기반 Selector 를 사용하는 반면 ReplicaSet 는 Set 기반 Selector 를 사용한다.
    * RC보다 Selector가 풍부하다.( matchLabels, matchExpressions)
    * 상태 확인 : get rs
    *  Replicas 수정 : kubectl. scale rs rs-nginx —replicas=2
* Deployment
    * ReplicationController 와 ReplicaSet 을 좀더 추상화한 개념
    * 실제 배포할 때는 이 컨트롤러를 주로 사용
    * 컨트롤러를 따로 정의하지 않고, Deployment 객체만 만든다.
    * Deployment 객체가 자동으로 롤링업데이트를 해준다.
    * rs를 컨트롤해서 Pod 수를 조절
    * Deployment -> ReplicaSet -> pod …
* DaemonSet
    * Pod 이 각각의 노드에서 하나씩만 돌게 한다. (균등하게 배포)
    * 보통 서버 모니터링이나 로그 수집 용도
    * 모든 노드가 아닌 특정 노드들만 선택할 수도 있다.
    * 롤링업데이트 / 롤백 가능

## Service
: Pod 간의 로드 밸런싱 역할.  
: Pod를 묶어주는 Virtual IP.  
(-> 라운드 로빈 방식 : 우선순위를 두지 않고, 순서대로 시간단위(Time Quantum)로 CPU를 할당하는 방식의 CPU 스케줄링 알고리즘)           
* NodePort?          
 : 클러스터 내 노드의 ip:port 로도 접근가능하게 함      
 :  ex. curl 10.146.0.10:30036       
 :  10.146.0.10 는 노드의 ip 고, 30036 는 NodePort 로 설정한 포트임           
 
 ---------------
       
* Ingress
: Ingress 는 api 게이트 웨이, 즉 url 기반 라우팅 역할을 한다. Service 앞에 붙는다.
예를 들어, /user 로 들어오는 트래픽은 service A 에, /products 로 들어오는 트래픽은 service B 로 라우팅 시켜준다.
Ingress 를 Service 앞에 달아두면, Service 는 NodePort 타입으로 선언되어야 한다.



