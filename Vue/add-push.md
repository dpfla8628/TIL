v-model로 연동할 경우 배열이 그대로 복사되기 때문에,  
json.copy로 값을 복사하여 추가한다.
  
또한 기존 배열 리스트 외에 추가할 리스트 자체를 따로 만들어주는게 좋다.  

  
예시 )    
```
...

 <button type="button" @click="addClick()"></button>
 <button type="button" @click="deleteClick(index)"></button>
 
 ...
 
data(){
  return{
    추가 데이터 리스트 : {
      'a' : '',
      'b' : ''
      },
     기존 데이터 리스트 : {
      'ListA' : {
        ... },
      'ListB' : {
        'a' : '',
        'b' : ''
        }
  }
}

...

 addClick () {
    this.기존 데이터 리스트.push(JSON.copy(this.추가 데이터 리스트))
  },
  deleteClick (index) {
    if (index === 0) {
      return
    }
    let ml = this.LogToMetricData.기존 데이터 리스트
    ml.splice(index, 1)
  },
  
```
