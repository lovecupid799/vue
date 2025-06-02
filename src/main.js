import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PubComponents from '@/components/control/';

const app = createApp(App)

app.use(router)
app.use(PubComponents)
app.mount('#app')
