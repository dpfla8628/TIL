## Web Server
: 데이터는 정적인 데이터(html, css, 이미지등)로 한정  

ex) apache (port : 80)

  
## WAS(Web Application Server)
**Web Server(정적 data 처리) + Web Container(동적 data 처리)**  
![image](https://user-images.githubusercontent.com/72377237/119345181-8034d700-bcd3-11eb-8c33-4e1e8c274437.png)
(= 컨테이너, 웹 컨테이너, 서블릿 컨테이너)  
: 동적인 데이터를 처리하는 서버. DB연결, 데이터 조작등과 같은 처리  
: 웹 기반 분산 시스템 개발을 쉽게 도와주고 안정적인 트랜잭션 처리를 보장해 주는 일종의 미들웨어소프트웨어 서버
  
ex) Oracle Weblogic(EJB사용), JEUS, JBoss, Apache Tomcat(port :8080)  


## Tomcat
- 단순한 웹 응용 프로그램이나 전체 Java EE 서버가 필요없는 Spring과 같은 프레임 워크를 사용하는 응용 프로그램에 널리 사용된다.
- Tomcat은 Apache Software Foundation의 Java 서블릿 컨테이너 및 웹 서버

## JBoss
- Red Hat의 자회사인 Jboss가 개발한 오픈 소스 Java EE 기반 Jboss Application Server
- Sun Microsystems의 Enterprise JavaBeans(EJB) API를 사용하여 기능을 제공

> JBoss가 기능이 더 많지만 무겁다.
