
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import { lazyPlugin } from './directives'
import App from './App.vue'
// import router from './router'
//引入初始化样式文件
import './styles/common.scss'

const app = createApp(App)

app.use(createPinia())
// app.use(router)
app.use(router)
app.mount('#app')
app.use(lazyPlugin)
