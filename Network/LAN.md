## LAN(Local Area Network)  
: 근거리 통신 망  
  
## LAN의 구성 형태
1 ) Bus Topology (버스형)  
신뢰성과 확장성이 좋으며 모든 노드 들이 버스에 T 자형으로 연결 되어 상호 Point - to - Poing 형태를 가지게 됩니다. 각 노드들의 연결은 어뎁터(Adapter)를 사용하며 양 끝 단에 Terminator를 두게 됩니다.  각 노드의 고장은 전체 네트워크 부분에 영향을 미치지 는 다른 장점을 가지며  CSMA/CD 방식을 주로 사용, 케이블 사용량이 적기 때문에 투자 비용이 적게 드는 편입니다.  

2 ) Ring Topology (링형)   
통신제어가 간단하고 신뢰성이 높으며 장거리 네트워크에서 사용 가능 합니다. 링(Ring) 형태를 이루지만 노드간 통신은 Point - to - Point 를 가지며 각 노드에서 신호 재생이 가능 하기 때문에 버스 형태와 달리 거리 제약이 적으며 잡음에도 강합니다.  
 
3 ) Star Topology (스타형/성형)  
중앙 제어 방식으로 모든 기기가 Point - to - Point 방식으로 연결 되어 있으며 문제 해결이 쉽고 하나의 기기의 고장은 전체에 영향을 미치지 않지만 중앙 제어 장비가 고장이 나면 모든 시스템에 영향을 미치게 됩니다. 케이블 사용량이 많으며 비용 또한 큰 편입니다.  

4 ) Mash Topology (메쉬형)  
네트워크 상의 모든 컴퓨터들이 연결되어진 형태로써 연결 된 기기나 노드가 고장나더라도 다른 경로를 통해 통신이 가능하며 어떠한 경우에도 네트워크가 동작한다는 장점을 가지게 됩니다. 하지만, 네트워크에 연결된 기기의 수가 많을 경우 모든 기기와 연결 해야 하기 때문에 케이블 사용량이 많으며 구조 또한 복잡하여 네트워크 관리가 힘들어 진다는 단점을 가지고 있습니다.  
 
=> 비용이 적게 들고, 적은 규모에서 적합한 토폴로지는 버스 또는 스타형입니다.
  
## 표준안
LAN의 표준안은 IEEE 802 위원회에 의해 추진되었으며, OSI 참조 모델의 하위 두개 계층인 물리 계층과 데이터 링크 계층을 대상으로 합니다.  

### LAN Card?
네트워크 인터페이스 컨트롤러는 컴퓨터를 네트워크에 연결하여 통신하기 위해 사용하는 하드웨어 장치  
