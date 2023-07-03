import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {createPinia} from 'pinia'
import router from './router'

const pinia = createPinia();


createApp(App).use(router).use(pinia).mount('#app')
