+ 파일 생성 : sudo mkdir /user/local/java  
+ 해당 위치로 jdk이동 : mv ./jdk1.8.9_161/ /user/local/java/  
(jdk 위치 : /user/local/java/jdk1.8.0_161/bin)  
          
+ 편집 : sudo nano /etc/environment     
path추가 -> :/user/local/jdk1.8.0_161/bin    
+ ==> source /etc/environment 를 통해 적용시킨다  

❓편집하다 기억이 잘 안나면? ctrl+z눌러서 백그라운드에 잠시 두고, 경로 찾고, fg 1을 통해 다시 들어간다.  

path확인하려면 ? echo $PATH  



