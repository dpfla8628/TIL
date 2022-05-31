## airflow란?
- AirBnB에서 만든 workflow management tool(workflow: 일련의 작업의 흐름)
- ETL 같은 경우는 데이터를 Extractaction -> Transformation -> Loading 하는 작업의 흐름이 있는데 이러한 workflow를 관리하는 툴이 바로 airflow이다. 
- 여기서 관리라는 것은 워크플로우(workflow)를 작성, 스케줄링, 모니터링 하는 작업을 말할 수 있다.
   
### 구성 요소
- Webserver
: UI를 통해 사용자에게 시각적으로 정보를 제공해주는 요소
- Scheduler
: 할당된 work들을 스케쥴링 해주는 component  
: executor에게 task를 제공해주는 역할  
- Executor
: 실행중인 task를 handling하는 component
- Worker
: 실제 task를 실행하는 주체자
- Database
: DAG, Task 등의 metadata를 저장하고 관리
     
#### DAG(Directed Acyclic Graph)
: 비순환 그래프로써 순환하는 싸이클이 없는 그래프
: 노드와 노드가 단방향으로 연결되어 있어 그 노드로 향하게 되면 돌아오지 않는다는 특성을 가진다
    
-----
## 설치
```sql
# python install
# 파이썬 공홈에서 설치하면됨

# pip install
sudo easy_install pip

# airflow install
pip install apache-airflow

# db reset
airflow db init

# user create
$ airflow users create \ 
> --username {Login_ID} \
> --firstname {First_NAME} \ 
> --lastname {Last_NAME} \
> --role Admin \              # 해당 부분은 고정
> --password {Password} \
> --email {Email}

# webserver start
airflow webserver --port 8080

# scheduler start
airflow scheduler
```

