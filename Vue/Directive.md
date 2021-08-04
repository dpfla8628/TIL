## 뷰 디렉티브란?
html 태크 안에 v- 접두사를 가지는 모든 속성

- v-if : 참,거짓 여부에 따라 화면에 표시 혹은 삭제
- v-for : 반복 출력 (index, name, value 제공)
- v-show : v-if와 비슷하나 false일 결우 display:none;으로 처리하여 화면상에서만 안보이게 된다
- v-bind : 뷰 데이터 속성을 연결
- v-on : 이벤트를 감지하여 처리
- v-model : 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화

```
<body>
  <div id="app">
    <input v-model="modeltest">
    <p>{{message}}</p>
    <p>{{reverseMessage}}</p>
    <p v-bind:id="uid">id check</p>
    <p v-if="flag">false일 때 flag의 변화 if</p>
    <p v-show="flag">false일 때 flag의 변화 show</p>
    <button v-on:click="clickBtn">button</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      data:{
          modeltest : '',
          message : 'Hello Vue.js',
          uid : '120',
          flag : false
      },
      watch :{ //동적 바인딩
          modeltest : function(data){
              console.log(data)
          }
      },
      methods: {//호출시에만 수행
          clickBtn : function(){
                      console.log("hi");
                  }
      },
      computed:{//대상 데이터의 값이 변경되면 자동으로 수행
          reverseMessage :function(){
              return this.message.split('').reverse().join('');
          }
      }
    });
  </script>
</body>
  ```
