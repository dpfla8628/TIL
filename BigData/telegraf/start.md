* 다운로드  
wget https://dl.influxdata.com/telegraf/releases/telegraf-1.13.3-1.x86_64.rpm
* 설치  
yum install -y telegraf-1.13.3-1.x86_64.rpm
* 서비스 시작  
systemctl start telegraf
systemctl enable telegraf
* 감시 확인  
./consume.sh | grep ID
