## SFTP(SSH)
: 통신을 할 때 보안적으로 안전하게 통신을 하기 위해 사용하는 프로토콜  
: SSH는 한 쌍의 Key를 통해 접속하려는 컴퓨터와 인증 과정을 거치게 된다  
```
service ssh  
service ssh status // 상태 확인  
apt-cache pkgnames | grep ssh // 현재 ssh 캐시 확인  
```
+ ssh 설치 (기존에 있다면 최신화가 된다)
```
sudo apt install openssh-server  
```
=> putty를 통해서 해당 서버 접속 가능 (포트 : 22)


## FTP 
: 파일을 전송하는 통신 규약
```
sudo apt install vsftpd // 설치
service --status-all // 설치 확인 가능
service vsftpd status // 실행 확인 가능
```
- cmd에서 접속  
사전작업 ) 포트 포워딩 설정 - 21
```
ftp [IP]
```
직접 명령어(get)을 이용해서 (윈도우->리눅스)파일을 가져올 수 있지만  
대부분 **파일질라**를 통해 가져온다.  
  
## => ftp[21]는 보안이 좋지 않아 대부분 sftp(ssh+ftp)[22]방식을 사용한다





