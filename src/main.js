import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils, faSpoon, faKitchenSet } from '@fortawesome/free-solid-svg-icons'

library.add(faUtensils, faSpoon, faKitchenSet)

createApp(App).use(router).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
