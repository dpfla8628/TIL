- 토픽 상세 정보
./kaftopics.sh --describe --bootstrap-server IP:9092
1. 송신
./kafka-console-producer.sh --broker-list IP:9092, IP:9092 --topic test
2. 수신
./kafka-console-consumer.sh --bootstrap-server IP:9092, IP:9092 --topic test
