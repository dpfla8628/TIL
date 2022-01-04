router를 이용한 페이지 이동 방법 3가지
```vue
<h2 @click="$router.push('/todos')">
  Test
</h2>
```
```vue
<router-link to="todos" tag="h2">
  Test
</router-link>
```
```vue
<h2 @click="toTodoApp">
  Test
</h2>
...
<script>
export default ({
  methods: {
     toTodoApp () {
       this.$router.push('/todos')
     }
  }
})
</script>
```
component 설정하는 index.js
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/views/Home'
import TodoApp from '~/views/TodoApp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: TodoApp
  }
]

export default new VueRouter({
  routes
})
```
