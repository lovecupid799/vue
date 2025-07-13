import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PubComponents from '@/components-pub/control/';
import NspComponents from '@/components-pub/control-nsp/';

const app = createApp(App)

app.use(router)
app.use(PubComponents)
app.use(NspComponents)
app.mount('#app')
