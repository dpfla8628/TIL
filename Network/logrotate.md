* logrotate 설정
```
/home/log/*.log
{
    su root root
    daily
    rotate 7
    missingok
    notifempty
    copytruncate
}
```
* lotate 실행
```
sudo /usr/sbin/logrotate -f /etc/logrotate.d/kafka
```
--------
* 강제 삭제 스크립트
```
vi DeleteLog.sh
```
```
#!/bin/sh
#생성 된지 7일이 지난 로그를 삭제하는 Script
find ./*.log -type f -mtime +7 -exec rm {} +
```
```
chmod 744 DeleteLog.sh
```
* cron 설정
```
crontab -e 
```
```
00 00 * * * /위치/DeleteLog.sh
```
