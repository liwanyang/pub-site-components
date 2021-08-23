import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/common.scss'

// import installElementPlus from './plugins/element'

const app = createApp(App)
// installElementPlus(app)
app.use(route).use(ElementPlus).mount('#app')