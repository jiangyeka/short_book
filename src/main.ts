import { createApp } from 'vue'
import './style.css'
import './normalize.css'
import App from './App.vue'
import router from './router'
import element from 'element-plus'
import {toKebab} from './utils/index'
import 'element-plus/dist/index.css'


const app = createApp(App)
import * as Icons from '@element-plus/icons-vue'

for (let i in Icons){
    app.component(`el-icon${toKebab(i)}`,(Icons as any)[i])
}

app.use(router).use(element)
.mount('#app')
