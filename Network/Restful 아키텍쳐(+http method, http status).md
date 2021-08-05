restful 아키텍쳐는 sementic web에서 출발한다.  
⇒ 기계가 웹을 해석하도록 하자  

# Sementic Web  

```
<font size="6"><b>Hello</b></font>
<h1>Hello</h1>
```

1행의 요소는 의도가 명확하지 않다. 개발자가 의도한 요소의 의미를 명확하게 나타내지 않고 다만 폰트 크기와 볼드체를 지정하는 메타데이터만을 브라우저에게 알리고 있다. 그러나 2행의 요소는 header(제목) 중 가장 상위 레벨이라는 의미를 내포하고 있어서 **개발자가 의도한 요소의 의미가 명확히 드러나고 있다.이것은 코드의 가독성을 높이고 유지보수를 쉽게한다.**  

**시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다.** 시맨틱 태그에 의해 컴퓨터가 HTML 요소의 의미를 보다 명확히 해석하고 그 데이터를 활용할 수 있는 시맨틱 웹이 실현될 수 있다.  

**시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.**  

이전의 문제점을 극복하자 !  

✔️http를 더 http스럽게  
✔️utl호출에 대한 이해도를 높이자  
✔️get메소드의 일반 원칙인 Safe Method를 지키자  
Safe Method : 서버측 자원에 아무런 영향을 끼치지 않는  
✔️Http Status Code의 체계를 잡자  
✔️Resource(=DB의 entity)를 계층적으로 분류하자  

  
리소스의 분리 :  
프로그램은 코드와 데이터로 구성된다. 데이터는 프로그램의 처리 대상이며 코드는 데이터를 처리하는 수단이다. 도스 프로그래밍과 달리 윈도우즈 프로그래밍에서는 이러한 데이터를 만들고 관리하는 것이 별도의 작업으로 분리되어 있다.  
이 데이터들 중에 코드와 무관한 것들을 리소스(Resource)라 하며 별도의 편집기로 만들어져 컴파일되며 링크시에 실행파일에 결합된다.  

# HTTP Method  
([메서드 한눈에 보기](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods))

GET,POST, PUT, DELETE, PATCH (↔CRUD)
  
- GET  
 - 서버측 자원을 읽기위한 요청에 사용된다.  
 - 일반적으로 "**Safe Method**" 라 불리우며 여러번 요청하더라도 서버측 자원에 대한 조작이 일어나지 않아야 한다.  
- PUT  
 - 서버측 자원에 대한 변경을 일으킨다. (통으로 보냄)  
 - "멱등성(idempotence)"이 확보되어야 하며 같은 요청을 여러번 날리더라도 그 결과(서버측 자원의 상태)는 동일해야 한다.  

❓멱등성 : 첫번째 요청만 먹고 두번째는 자원의 변화가 없어야한다  
  
- DELETE  
 - 서버측 자원을 삭제한다.  
 - PUT과 마찬가지로 멱등성이 확보되어야 한다.  
- PATCH  
 - 서버측 자원의 일부를 수정한다. (부분적으로 보냄)  
 - PUT, DELETE와 마찬가지로 멱등성이 확보되어야 한다.  
- POST    
 - 서버측에 새로운 자원을 추가하는 요청에 사용된다.  
 - Safe Method도 아니며 멱등성도 부여되지 않는다.  
 - 서버측의 별다른 처리가 없는 경우 같은 **요청을 여러번 날리면 같은 자원이 지속적으로 추가**된다.  

? 어느 항목에도 넣기 애매한 행위는 Restful 아키텍쳐POST를 사용한다  .
 
# Http Status  
[상태 한눈에 보기](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)  

# Resource 분류  
ex)  
."POST /animals/puppies/upload" ❌ POST /upload/animals/puppies"❌  
."POST /animals/puppies?name=ugly&delicious=false" 🆗  

ex)  
"GET /send/email/puppies"❌  
"POST /email/puppies/send?to=someone@email.com"🆗  

---

---

# Rest란?  

“Representational State Transfer” 의 약자  
자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미한다.  
DB의 학생 정보가 자원일 때, ‘students’를 자원의 표현으로 정한다  
JSON 혹은 XML를 통해 데이터를 주고 받는 것이 일반적  

- 구성 요소  
-자원(Resource): URI  
   Client는 URI를 이용해서 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 Server에 요청한다.  
-행위(Verb): HTTP Method  
   HTTP 프로토콜은 GET, POST, PUT, DELETE 와 같은 메서드를 제공한다.    
-표현(Representation of Resource)  
   REST에서 하나의 자원은 JSON, XML, TEXT, RSS 등 여러 형태의 Representation으로 나타내어 질 수 있다.  

- 특징  
1. Server-Client(서버-클라이언트 구조   
2. Stateless(무상태)    
세션과 쿠키와 같은 context 정보를 신경쓰지 않아도 되므로 구현이 단순해진다.
즉, 이전 요청이 다음 요청의 처리에 연관되어서는 안된다. ⇒서비스의 자유도가 높아진다.    
3. Cacheable(캐시 처리 가능)  
웹 표준 HTTP 프로토콜을 그대로 사용하므로 웹에서 사용하는 기존의 인프라를 그대로 활용할 수 있다.  
캐시 사용을 통해 응답시간이 빨라지고 REST Server 트랜잭션이 발생하지 않기 때문에 전체 응답시간, 성능, 서버의 자원 이용률을 향상시킬 수 있다.  
4. Layered System(계층화)  
Client는 REST API Server만 호출한다.  
REST Server는 다중 계층으로 구성될 수 있다.  
5. Code-On-Demand(optional)  
Server로부터 스크립트를 받아서 Client에서 실행한다.  
반드시 충족할 필요는 없다.   
6. Uniform Interface(인터페이스 일관성)  
URI로 지정한 Resource에 대한 조작을 통일되고 한정적인 인터페이스로 수행한다.  
특정 언어나 기술에 종속되지 않는다.  
  
  
# REST API란?

- API(Application Programming Interface)란  
데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것  
- REST API의 정의  
REST 기반으로 서비스 API를 구현한 것  

→ 사내 시스템들도 REST 기반으로 시스템을 분산해 확장성과 재사용성을 높여 유지보수 및 운용을 편리하게 할 수 있다.  


# RESTful이란?  

‘REST API’를 제공하는 웹 서비스를 ‘RESTful’하다고 할 수 있다.  
REST 원리를 따르는 시스템은 RESTful이란 용어로 지칭된다.  
