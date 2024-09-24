import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router  from "./router"
import { createPinia } from 'pinia';
const pinia = createPinia();

import ElementPlus from 'element-plus' //全局引入
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')

