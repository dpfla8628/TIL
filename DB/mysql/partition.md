목적 : 성능 개선을 위해 사용

   
* 파티션 생성
```mysql
ALTER TABLE [테이블명]
PARTITION BY RANGE (partitionDate) (
 	PARTITION p202201 VALUES LESS THAN (UNIX_TIMESTAMP('2022-02-01 00:00:00')),
 	PARTITION p202202 VALUES LESS THAN (UNIX_TIMESTAMP('2022-03-01 00:00:00')),
 	PARTITION p202203 VALUES LESS THAN (UNIX_TIMESTAMP('2022-04-01 00:00:00')),
 	PARTITION p202204 VALUES LESS THAN (UNIX_TIMESTAMP('2022-05-01 00:00:00')),
 	PARTITION p202205 VALUES LESS THAN (UNIX_TIMESTAMP('2022-06-01 00:00:00')),
 	PARTITION p202206 VALUES LESS THAN (UNIX_TIMESTAMP('2022-07-01 00:00:00')),
 	PARTITION p202207 VALUES LESS THAN (UNIX_TIMESTAMP('2022-08-01 00:00:00')),
 	PARTITION p202208 VALUES LESS THAN (UNIX_TIMESTAMP('2022-09-01 00:00:00')),
 	PARTITION p202209 VALUES LESS THAN (UNIX_TIMESTAMP('2022-10-01 00:00:00')),
 	PARTITION p202210 VALUES LESS THAN (UNIX_TIMESTAMP('2022-11-01 00:00:00')),
 	PARTITION p202211 VALUES LESS THAN (UNIX_TIMESTAMP('2022-12-01 00:00:00')),
 	PARTITION p202212 VALUES LESS THAN (UNIX_TIMESTAMP('2023-01-01 00:00:00'))
);
```
* 전체 파티션 이름 조회
```mysql
select partition_name from information_schema.PARTITIONS where TABLE_NAME = '[테이블명]'
```
* 전체 파티션만 삭제
```mysql
alter table [테이블명]  remove partitioning
```
* 원하는 파티션 + 데이터까지 삭제
```mysql
alter table [테이블명] drop partition p202304;
```
