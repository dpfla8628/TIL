centOS? 리눅스계 운영 체제

## VMware centOS 실행
불편하면 putty로 보자  
PuTTY(이하 푸티)란? 가상 단말기 프로그램

## 리눅스 환경 ip 확인
+ 윈도우 : ipconfig OR ipconfig /all  |  리눅스 : ip addr OR ifconfig  
Virtual Network Editor 확인 - NAT으로 연결되어 있다.(vmnet8)

> window                        
> vmware(VMnet8)        
> centos[linux]           

## 네트워크 설정
vi /etc/sysconfig/network-script/ifcfg-eno16777736  
(etc : 설정 파일 있는 폴더)  
> IPADDR=192.168.64.200  
NETMASK=255.255.255.0  
GATEWAY=192.168.64.2  
DNS1=8.8.8.8  


## 설정 반영을 위한 네트워크 재시작
systemctl restart NetworkManager  
( = systemctl restart network)   
상태 확인  : systemctl status NetworkManager  
