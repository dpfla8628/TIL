Kubenates   
: 컨테이너를 쉽고 빠르게 배포/확장하고 관리를 자동화해주는 오픈소스 플랫폼   
: Linux 컨테이너 작업을 자동화하는 오픈소스 플랫폼.  
(컨테이너란? 애플리케이션 & 애플리케이션을 구동하는 환경을 격리한 공간이다.)   
: 도커를 관리하는 툴    
(도커란? 컨테이너 기반의 오픈소스 가상화 플랫폼)   
: 다수의 컨테이너 실행을 관리 및 조율    
설치 없이 쿠버네티스 사용하기.   
https://www.katacoda.com/courses/kubernetes/playground   
    
<단축키>.  
ctrl+L : 전체 지우기.  
Kubectl get nodes : 전체 노드 확인.  
    
<구성>.  
master(control plane) —(요청)—> Worker.  
   
* Kubectl : 원하는 명령어 요청하는 명령어.     
: Kubectl [command] [Type] [Name] [flags].     
- Command : create, get, delete, edit , ….      
- Type : node, pod, service.  
- Name : 자원의 이름.      
- Flags : 부가적으로 설정할 옵션 (—help)      
 <환경 설정>        
명령어 자동 완성 명령어        
source <(kubectl completion bash)      
source <(kubeadm completion bash)     
echo "source <(kubectl completion bash)" >> ~/.bashrc     
echo "source <(kubeadm completion bash)" >> ~/.bashrc       
        
<namespace 생성>      
*kubectl get namespaces         
- Cli       
1. kubectl create namespace blue     
- yaml       
1. kubectl create namespace orange --dry-run -o yaml     
2. kubectl create namespace orange --dry-run -o yaml > orange-ns.yaml     
3. kubectl create -f orange-ns.yaml     
      
<Pod 생성>     
*kubectl get pods -o wide     
1. CLI      
Kubectl run Pod이름 —image=nginx:1.14 —port=80        
2. YAML    
Cat pod-nginx.yaml 생성      
Kubectl create -f pod-nginx.yaml      
     
<http접속>     
Curl 아이피       
           
