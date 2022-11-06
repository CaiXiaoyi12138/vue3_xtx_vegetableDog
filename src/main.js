import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 注册插件
createApp(App).use(store).use(router).mount('#app')
