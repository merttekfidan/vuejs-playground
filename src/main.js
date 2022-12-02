import { createApp } from 'vue'
import App from './App.vue'
import {testStore}  from './store/testStore'
import './assets/main.css'

const app = createApp(App)

app.use(testStore)

app.mount('#app')