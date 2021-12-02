## Web Server
1) 하드웨어.  
Web 서버가 설치되어 있는 컴퓨터.  
2) 소프트웨어.    
웹 브라우저 클라이언트로부터 HTTP 요청을 받아 정적인 컨텐츠(.html .jpeg .css 등)를 제공하는 컴퓨터 프로그램.  
- Web Server의 기능. 
정적인 컨텐츠 제공. 
동적인 컨텐츠 제공을 위한 요청 전달. 
- Web Server의 예. 
Ex) Apache Server, Nginx, IIS(Windows 전용 Web 서버) 등  
  
## WAS(Web Application Server). 
DB 조회나 다양한 로직 처리를 요구하는 동적인 컨텐츠를 제공하기 위해 만들어진 Application Server. 
HTTP를 통해 컴퓨터나 장치에 애플리케이션을 수행해주는 미들웨어(소프트웨어 엔진)이다.  
- WAS의 역할. 
WAS = Web Server + Web Container.  
Web Server 기능들을 구조적으로 분리하여 처리하고자하는 목적으로 제시되었다.   
분산 트랜잭션, 보안, 메시징, 쓰레드 처리 등의 기능을 처리하는 분산 환경에서 사용된다.  
- WAS의 주요 기능 
프로그램 실행 환경과 DB 접속 기능 제공    
여러 개의 트랜잭션(논리적인 작업 단위) 관리 기능. 
업무를 처리하는 비즈니스 로직 수행.  
- WAS의 예. 
Ex) Tomcat, JBoss, Jeus, Web Sphere 등.   
