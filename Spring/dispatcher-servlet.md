
# Dispatcher-servlet  
Spring MVC는 DispatcherServlet이 등장함에 따라 web.xml의 역할을 축소시켜주었다.  
기존에는 모든 서블릿에 대해 URL 매핑을 활용하기 위해서 web.xml에 모두 등록해주어야 했지만,   
dispatcher-servlet이 해당 어플리케이션으로 들어오는 모든 요청을 핸들링해주면서 작업을 상당히 편리하게 할 수 있게 되었다.  
![image](https://user-images.githubusercontent.com/72377237/121103842-b2017e00-c83b-11eb-854e-6ee454898f68.png)  

-------------

<img src = "https://user-images.githubusercontent.com/72377237/121104530-36a0cc00-c83d-11eb-84a6-b4002985a6c4.png" width="300" > ===>
<img src= "https://user-images.githubusercontent.com/72377237/121104549-3e607080-c83d-11eb-96f7-52eb6e24d721.png" width="300" >




---------------
> Servlet?

클라이언트의 요청을 처리하고, 그 결과를 반환하는  
Servlet 클래스의 구현 규칙을 지킨 자바 웹 프로그래밍 기술  
<img src ="https://user-images.githubusercontent.com/72377237/121104350-d6118f00-c83c-11eb-9429-2d44f05c9ec4.png" width="500">


  
### webapp/WEB-INF/config/dispatcher-servlet.xml
```xml   
< ?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
                           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.0.xsd
                           http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-4.0.xsd
                           http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop-4.0.xsd ">
     
    <mvc:annotation-driven />
 
    <context:component-scan base-package="com.s4c.stg.*">
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller" />
    </context:component-scan>
     
    <bean id="objectMapper" class="org.springframework.http.converter.json.Jackson2ObjectMapperFactoryBean" />
    <bean class="org.springframework.web.servlet.view.UrlBasedViewResolver">
        <property name="viewClass" value="org.springframework.web.servlet.view.JstlView"/>
        <property name="prefix" value="/WEB-INF/views/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
     
</beans>
```   
  ### web.xml
 ```xml
  <web-app version="3.0"
        xmlns="http://java.sun.com/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd">
    <display-name>Archetype Created Web Application</display-name>
 
  <filter>
  //인코딩 설정
    <filter-name>encodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
      <param-name>encoding</param-name>
      <param-value>UTF-8</param-value>
    </init-param>
  </filter>
  ///인코딩 적용 url 
  <filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/</url-pattern>
  </filter-mapping>
 //dispatcher 서블릿 추가  
  <servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>//서블릿 초기화 파라미터
      <param-name>contextConfigLocation</param-name>
      <param-value>/WEB-INF/config/dispatcher-servlet.xml</param-value>
    </init-param>
  </servlet>
   
  <servlet-mapping>
    <servlet-name>dispatcher</servlet-name>
    <url-pattern>/</url-pattern>
  </servlet-mapping>
 
  <context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>WEB-INF/config/spring/context-*.xml</param-value>//해당 형식의 파일을 
  </context-param>
 
  <listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>
 
  <session-config>
    <session-timeout>-1</session-timeout>
  </session-config>
 
</web-app>
  ```
