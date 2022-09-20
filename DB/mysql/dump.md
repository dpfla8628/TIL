- export
```
mysqldump -u root -p database > mkdir /data/patch/20220919/backup
```
- import
```
mysqldump -u root -p database < ~/dump/database.sql
```
or
```
cd dump 위치
mysql 접속
source ./database.sql
```
