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
Mutation은 State의 변경으로 놓아두고, Action에서 처리
