- MSA구성을 지원하는 Springboot기반 Framework
![image](https://user-images.githubusercontent.com/72377237/163328570-82dc2f0e-1d27-491f-912a-c60ae6d694c8.png)

- 사용하는 이유?
msa구조에서 각 Application을 나눠서 쉽게 관리하기 위함  
예를 들어 config 의존성을 사용한다?하면 하나의 application.yml파일로 해당 어플리케이션의 설정 값을 한번에 쉽게 바꿔주기 위해 사용한다

+ 쿠베 사용하고 싶다면?
spring-cloud-kubernetes의존성을 추가해주자
![image](https://user-images.githubusercontent.com/72377237/163329658-dcc2d378-10fb-472f-826e-e5f22eb83045.png)
