## 라우팅이란
웹페이지 간의 이동 방법  
라우팅을 이용하면 화면 간의 전환이 매끄럽다.
```
  <body>
    <div id="app">
      <h1>뷰 라우터 예제</h1>
      <p>
        <router-link to="/main">Main 컴포넌트로 이동</router-link>
        <router-link to="/login">Login 컴포넌트로 이동</router-link>
      </p>
      <router-view></router-view>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
    <script>
      // 3. Main. Login 컴포넌트 내용 정의
      var Main = { template: '<div>main</div>' };
      var Login = { template: '<div>login</div>' };

      // 4. 각 url에 해당하는 컴포넌트 등록
      var routes = [
        { path: '/main', component: Main },
        { path: '/login', component: Login }
      ];

      // 5. 뷰 라우터 정의
      var router = new VueRouter({
        mode:'history',//해시값 없애기
        routes
      });

      // 6. 뷰 라우터를 인스턴스에 등록
      var app = new Vue({
        mode:'history',
        router
      }).$mount('#app');//인스턴스를 화면에 붙이는 역할
    </script>
  </body>
</html>
```
