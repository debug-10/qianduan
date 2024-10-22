import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入pinia
import { createPinia } from 'pinia'
//实例化 pinia
const pinia = createPinia();

import piniaPluginPersistedState from 'pinia-plugin-persistedstate'; 
pinia.use(piniaPluginPersistedState);

import router from './router';

createApp(App).use(pinia).use(router).mount('#app')
