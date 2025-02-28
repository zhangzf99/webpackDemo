import { add} from './tools/index'

console.log(add(1, 2))

import  './style/style.css'
import img from './images/image.png'

const el = document.createElement('div')
el.className = 'title'
el.innerHTML = '这是新加的标题'
document.body.appendChild(el)

const image = document.createElement('img')
image.src = img
document.body.appendChild(image)


import App  from './App.vue'
import { createApp } from 'vue'
const app = createApp(App)
app.mount('#app')