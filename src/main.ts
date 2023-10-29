import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.css'
import './style/colors.css'
import router from '@/routes'
import store from '@/store'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app');
