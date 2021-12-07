```vue
new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        plus (state, num) {
            state.count += num;
        },
    },
    actions: {
        vote (context, text) {
            if (text === 'Yes') {
                context.commit('plus', 1);
            } else if (text === 'No') {
                context.commit('plus', -1);
            }
        },
    },
}
```
=> Mutation은 State의 변경으로 놓아두고, Action에서 처리

- Matation       
: 반드시 동기적으로 작성되어야 한다.  
: 호출 ? context.commit   
: 접근 ? context.state / context.getters     
- Action    
: 호출 ? store.dispatch    
<img width="1250" alt="image" src="https://user-images.githubusercontent.com/72377237/144945725-d854f883-6dde-4585-aaa0-af6f3785a0dd.png">
