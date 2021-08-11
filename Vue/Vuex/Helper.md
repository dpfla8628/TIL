> index.js
```
import count from './path.../a'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    count
  }
  
if(module.hot){
  module.hot.accept([
    './path.../a'
  ], () =>{
  const count require('./path.../a').default
  
  store.hotUpdate{
    modules:{
      count
    }
  })
```

| promise란?     
코드의 실행이 끝날때 까지 기다렸다가,     
완료되면 리턴값으로 원하는 값을 반환     
  
## this.$store
: Vuex 상태를 Vue 컴포넌트에서 가져오기
```
computed: {
    count () {
      return this.$store.state.count
    }
```

## mapState
: 계산된 getter 함수를 생성
```
import { mapState } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count,
  })
}
```

## mapGetters
: 저장소 getter를 로컬 계산된 속성에 매핑
```
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
    ])
  }
}
```

## mutations
: 상태 변경 (변이) - 동기적으로 트랜잭션
```
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 상태 변이
      state.count++
    }
  }
})
```
- Commit with payload 
: Mutation 핸들러를 실행
```
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}
//...
store.commit('increment', {
  amount: 10
})
```
- mapMutations.  
: this.$store.commit('xxx')를 사용하여 컴포넌트에서 변이를 수행하거나      
컴포넌트 메소드를 store.commit 호출에 매핑하는 mapMutations 헬퍼를 사용할 수 있습니다     
```
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'increment' // this.increment()를 this.$store.commit('increment')에 매핑합니다.
    ])
  }
}
```


## e.g. mapGetters and mapState
```
state: { 
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters:{ 
    allUsersCount: state => {
      return state.allUsers.length      
    },
    countOfSeoul: state =>{
      let count = 0
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul/getters.allUsersCount * 100)
    }
  }
  
  =========>
  
  import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed:{
    ...mapGetters({
      count : 'allUsersCount', 
      seouls : 'countOfSeoul',
      percent : 'percentOfSeoul'
    }), 
    ...mapState(['allUsers'])
  },
  
  ...
```



## mapActions
: this.$store.dispatch('xxx')를 사용하여 컴포넌트에서 액션을 디스패치하거나   
컴포넌트 메소드를 store.dispatch 호출에 매핑하는 mapActions 헬퍼를 사용할 수 있습니다  
: 액션은 종종 비동기적이다  
```
mport { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'increment' // this.increment()을 this.$store.dispatch('increment')에 매핑
      ])
  }
}
```
- 비동기식 처리
```
actions: {
  actionB ({ dispatch, commit }) {
    return dispatch('actionA').then(() => {
      commit('someOtherMutation')
    })
  }
}
```
*Dispatch triggers an action whereas commit triggers a mutation

## createNamespacedHelpers
before
```
computed: {
  ...mapState('some/nested/module', {
    a: state => state.a,
    b: state => state.b
  })
},
methods: {
  ...mapActions('some/nested/module', [
    'foo', // -> this.foo()
    'bar' // -> this.bar()
  ])
}
```
after
```
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default {
  computed: {
    // `some/nested/module`에서 찾음
    ...mapState({
      a: state => state.a,
      b: state => state.b
    })
  },
  methods: {
    // `some/nested/module`에서 찾음
    ...mapActions([
      'foo',
      'bar'
    ])
  }
}
```
