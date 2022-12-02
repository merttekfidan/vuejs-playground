<script>
    import SearchBar from './components/SearchBar.vue'
    import GridTables from './components/GridTables.vue'
    import {getArticles} from './@API/API'
    export default {
        components: {
            SearchBar,
            GridTables
        },
        data(){
            return{
                articles:[]
            }
        },
        methods: {
            async submit() {
                getArticles('test')
                .then((res)=>{
                    this.articles.push(...res.articles)
                    console.log(res)
                })
                .catch((err)=>{
                    throw err
                })
            }
        }
        
        
    }
</script>

<template>
    <header>
    </header>
    <h1 @click='submit'>Test Day App</h1>
    <ul>
        <li v-for="article in articles" :key='article.title'>{{article.title}}</li>
    </ul>
    <main>
        <SearchBar/>
        <GridTables/>
  </main>
</template>

