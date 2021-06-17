# DNS(Domain Name System)
숫자로 구성된 네트워크 주소인 IP주소를 
사람이 이해하기 쉬운 명칭인 도메인이름으로 상호 매칭시켜주는 시스템  
  
![image](https://user-images.githubusercontent.com/72377237/122430179-51f2a080-cfce-11eb-86f6-513a11955c79.png)

## 동작 원리
1. 컴퓨터에서 브라우저를 켜고 www.google.com 을 입력한다.
2. 컴퓨터는 컴퓨터 내부에 등록 되어 있는 DNS 서버로 www.google.com에 해당되는 IP 주소를 물어보고
3. DNS 서버는 해당 도메인의 IP 주소를 알려준다.
4.컴퓨터는 이를 받아서 IP 주소에 해당하는 컴퓨터에 접속하게 되는 것이다.

### 내부 로컬 DNS 정보 강제 변경
1. C:\Windows\System32\drivers\etc\hosts(관리자 권한으로 실행)
2. 맨 아래 dns에 [아이피 도메인] 추가

