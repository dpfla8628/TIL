> 시계열이란?
> 시간의 흐름에 따라서 기록된 데이터들의 수열


## TSDB?
: 시간(time)과 값(value)이 한 쌍을 이루는 데이터를 시간에 따라 순차적으로 저장하고 서비스하는 시스템.   
즉 해당 값이 언제 기록됐는지를 알 수 있다는 것.  
: 시간 데이터를 처리하는데 용이

### 장점
- 실시간 변화 추적에 용이
- 오래된 데이터를 삭제하기 편리
RDB를 사용하면 오래된 데이터를 처리하기 번거로운 반면 TSDB는 1년, 5년 등 일정 시간이 지난 데이터 삭제가 편리하다.
- 데이터 입출력이 빠름
