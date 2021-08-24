import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import axiosPlugin  from './plugins/axios';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/common.scss'

const app = createApp(App)
app.use(route).use(ElementPlus).use(axiosPlugin).mount('#app')