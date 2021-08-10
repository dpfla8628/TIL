```
brew install wget

wget http://download.redis.io/redis-stable.tar.gz
tar xvzf redis-stable.tar.gz
cd redis-stable
make

make test

brew install redis

redis-server

redis-cli ping
->PONG

redis-cli
```
```
127.0.0.1:6379> set a 1
OK
127.0.0.1:6379> get a
"1"
127.0.0.1:6379> del a
(integer) 1
127.0.0.1:6379> get a
(nil)
127.0.0.1:6379> select 1
OK
127.0.0.1:6379[1]> select 0
OK
127.0.0.1:6379> 


```
