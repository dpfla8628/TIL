Kubenates.  
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
           
