참고 https://sanghaklee.tistory.com/50
  
Swagger의 주된 목적은 RESTful API를 문서화시키고 관리하는 것이다.   
API 문서를 일반 Document로 작성하면 API 변경 시마다 문서를 수정해야 하는 불편함이 있는데, Swagger 같은 Framework를 이용하면 이를 자동화할 수 있다. (Spring boot 사용 시)
  
- test e.g.     
https://petstore.swagger.io/?_ga=2.21564027.192398898.1628210592-1644006390.1628210592#/ 
     
*URL : https://petstore.swagger.io/v2/pet -POST     
*Body :  
{ 
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
