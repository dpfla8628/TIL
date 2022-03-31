## axios
- HTTP 통신 라이브러리
- response data속성이 객체 형태이기 때문에 json파싱을 할 필요가 없다. => 뷰 리소스보다 사용성이 좋다
```
<div id="app">
  <button v-on:click="getData">프레임워크 목록 가져오기</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  new Vue({
    el: '#app',
    methods: {
      async getData: function() {
          await axios.get('https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json')
          .then(function(response) {
            console.log(response);
                            //객체 형태이기 때문에 Json.parse을 할 필요가 없다. 
          });
      }
    }
  });
</script>
```
참고 ) 
async await 가 promise보다 가독성이 좋음
```
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('resolved');
  } else {
    reject('rejected');
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
```
