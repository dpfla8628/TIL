slf4j의 구현체는 log4j이다  
spring-boot의 경우 [logback.xml](https://goddaehee.tistory.com/206)을 사용한다.  


> 로그에 대해 알아보자  

로그레벨은  
TRACE > DEBUG > INFO > WARN > ERROR > FATAL 순 입니다.  

#TRACE : 추적 레벨은 Debug보다 좀더 상세한 정보를 나타냄  

#DEBUG : 프로그램을 디버깅하기 위한 정보 지정  

📌디버그를 쓰지 않는 이유 ? 로그 파일의 용량 차지와 낭비가 심하다.  

#INFO :  상태변경과 같은 정보성 메시지를 나타냄  

#WARN :  처리 가능한 문제, 향후 시스템 에러의 원인이 될 수 있는 경고성 메시지를 나타냄   

#ERROR :  요청을 처리하는 중 문제가 발생한 경우# FATAL :  아주 심각한 에러가 발생한 상태, 시스템적으로 심각한 문제가 발생해서 어플리케이션 작동이 불가능할 경우  
