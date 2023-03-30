#### kubernetes 환경을 구축하고 pod, service를 생성한 뒤에 원하는 pod 안에 altibase를 설치한다.
#### 이후 외부에서(dbeaver) 접근 가능하도록 한다.
---

-- 파드 생성 (new-pod.yaml)
```
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: kube
  name: kube
spec:
  containers:
  - image: nginx:1.14
    name: kube
    ports:
    - containerPort: 20300
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Always
status: {}
```

-- 파드 적용
```
kubectl apply -f new-pod.yaml
```

— 서비스 생성
```
kubectl expose pod kube --type=NodePort --port=20300
```

-- altibase download     
https://docs.altibase.com/pages/viewpage.action?pageId=13436834#AltibaseQuickInstall&StartforUNIX-%EC%82%AC%EC%A0%84%EC%A0%88%EC%B0%A8
http://support.altibase.com/kr/product


-- altibase 복사
```
kubectl cp altibase-server-7.1.0.8.3-LINUX-X86-64bit-release.run kube:/
```

-- 파드 접속
```
kubectl exec kube -it -- bash
```

-- altibase chmod 변경
```
chmod 744  altibase-server-7.1.0.8.3-LINUX-X86-64bit-release.run
```

-- altibase install
```
./altibase-server-7.1.0.8.3-LINUX-X86-64bit-release.run
```

-- path 입력
```
/home/altibase/altibase_home
```

--라이센스 입력
...
    

— 명령어 등록
```
echo 'export PATH=/home/altibase/altibase_home/bin:$PATH' >>~/.bash_profile
source ~/.bash_profile
```

— 필요한 라이브러리 설치
```
apt-get update
apt-get install libncurses5
apt-get update
apt-get install vim
```

—ln
```
ln -s /home/altibase/altibase_home/bin/isql /bin/isql
```

— home path
```
echo 'export ALTIBASE_HOME=/home/altibase/altibase_home' >>~/.bash_profile;
source ~/.bash_profile;
```


— db 생성
```
server create MS949 UTF16
```

— 실행
```
server start
```

— isql 접근
```
isql -u sys -p manager -sysdba
```

— show db
```
select db_name from v$database;
```

— create table example
```
CREATE TABLE test(
t1 INTEGER,
t2 VARCHAR(3));
```

[ip 정보]   
(현재 노드는 mater01, worker01, worker02로 구축되어 있음)    
<node> worker01 : 192.168.100.32    
<service-NodePort> kube : 20300:30598/TCP    
<pod> kube : ip - 192.168.132.24 / node - kube-worker01    
    
— dbeaver 접속    
jdbc:Altibase://192.168.100.32:30598/mydb    
