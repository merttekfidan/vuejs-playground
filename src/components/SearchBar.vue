<script>
  export default {
    methods:{
      callStore(){
        this.$store.dispatch('setNameAction',{name:'Mert'})
        console.log(`state.count: ${this.$store.state.name}`)
      },
    },
    computed: {
      getName(){
        return this.$store.state.name
      }
    }
  }
</script>

<template>
  <input 
    type='text' 
    placeholder='Type Something...' 
  />
  {{this.$store.state.name}}
  <h1>
    {{getName}}
  </h1>
  <button @click='callStore'>Search</button>
</template>

<style>

</style>