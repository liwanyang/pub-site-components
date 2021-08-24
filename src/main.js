import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import axiosPlugin  from './plugins/axios';
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/common.scss'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
const app = createApp(App)
app.use(route).use(ElementPlus).use(axiosPlugin).use(VMdPreview).mount('#app')