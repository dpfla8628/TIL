<template>
    <div>
        {{ todo.title }}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            todo: {}
        }
    },
    created() {
        this.fetchTodo()
    },
    methods: {
        async fetchTodo () {
            // res.data만 가져오는 방법!
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            this.todo = data
        }
    }
}
</script>
