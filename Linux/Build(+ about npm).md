# back  
(pom.xml)  
- maven 방식  
    - 명령어 : mvn ↔ mvn clean  

#### before  
server -  explorer . - 파일 4개  

#### after  
mvn install    
⇒ target 디렉토리 생성    
  
  
# front
(package.json)  

- node.js 방식  
배포 : npm install  

#### before  
client -  explorer . - 파일 7개  

#### after  
빌드 : npm run-script build  
⇒ dist 디렉토리 생성  


----------
# npm?  
 
- Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램.  
(노드에서 모듈이란? 관련된 코드들을 모아서 캡슐화 해놓은 것.)  

- 자바스크립트 라이브러리를 설치하고 관리하는 패키지 매니저  
(자바랑 비교한다면 메이븐과 비슷한 역할)  
  
- npm으로 외부 모듈 설치 : node_modules 디렉토리에 저장, 우리가 설치한 외부 모듈이 의존 모듈까지 같이 설치함  

**[npm, package.json으로 쉽게 모듈 설치하기]**  

1) npm init : package.json 생성 - 프로젝트 의존 모듈 관리(사용 모듈 네임, 버젼), 프로젝트 정보  

2) npm install 모듈명 --save : 모듈 설치 시 --save 옵션을 주면 package.json에 자동 등록됨  

- node_modules 디렉토리가 없어도 package.json만 있으면 npm install 로 프로젝트 사용 모듈 다운로드 받을 수 있음  

(node -v를 통해 버전 확인이 가능하다.)

**[npm 시작하기]** 
npm start

