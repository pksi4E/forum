import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppDate from '@/components/AppDate.vue'

const app = createApp(App)

app.use(router)

app.component('AppDate', AppDate)

// const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue)$/)
// requireComponent.keys().forEach(function (filename) {
//     let baseComponentConfig = requireComponent(filename)
//     app.component(baseComponentName, baseComponentConfig)
// })
app.mount('#app')
