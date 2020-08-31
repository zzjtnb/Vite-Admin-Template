import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/tailwind.css';
import './assets/css/reset.css';

import DashboardLayout from './layout/DashboardLayout.vue';
import EmptyLayout from './layout/EmptyLayout.vue';

// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);

app.use(router)
app.use(store)
app.mount('#app')
