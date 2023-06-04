import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import dotenv from 'dotenv';


const app = createApp(App);
dotenv.config();

app.use(createPinia())
app.use(router)

app.mount('#app')
