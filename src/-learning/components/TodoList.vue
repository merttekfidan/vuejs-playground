<script>

export default({
    data(){
        return{
            todoArray:[],
            currentTodo:''
        }
    },
    methods:{
        addTodo(currentTodo){
            this.todoArray.push(currentTodo)
            this.currentTodo=''
        }
    }
})
</script>

<template>
    <input @keyup.enter="addTodo(currentTodo)" v-model='currentTodo' type="text"/>
    <ul>
        <li style='color:white' v-for="(todo,i) in todoArray" v-bind:key='i'>{{todo}}</li>
    </ul>
</template>
