##props 속서
상우 컴포넌트에서 하우 컴포넌트로 데이터르 전달할 때 사용하는 속성
```
<html>
  <head>
    <title>Vue Sample</title>
  </head>
  <body>
    <div id="app">
        <child-component v-bind:propsdata="message"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
        Vue.component('child-component',{
            props:['propsdata'],
            template:'<p>{{propsdata}}</p>',
        });
        new Vue({
            el : '#app',
            data : {
                message : 'Hello',
            }
        });
    </script>
  </body>
</html>
```
