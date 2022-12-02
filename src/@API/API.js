import axios from 'axios'
const API_KEY = ''
const URL = 'https://newsapi.org/v2/everything?q='
axios.defaults.headers.common['Authorization'] = 'Bearer ' + API_KEY

const getArticles = async(keyword)=>{
    let data = await axios.get(URL+keyword).then((res)=>{
        return res.data
    }).catch((error)=>{
        console.log(error)
    })
    let news = data
    return news
}

export{ getArticles }