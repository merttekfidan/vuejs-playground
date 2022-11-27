<script>
    export default{
        data(){
            return{ name:'Mert'}
        },
        methods:{
            doSmth(){
                this.name='Aleksa'
            }
        },
        beforeMount(){
            console.log('Before Mounted')
        },
        mounted(){
            console.log('Mounted')
        },
        beforeUpdate(){
            console.log(`${this.name}`)
        },
        updated(){
            console.log(`${this.name}`)
        }
    }
</script>

<template>
    <h1 @click='doSmth'>{{name}}</h1>
</template>