import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/tailwind.css';
import './assets/css/reset.css';

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
