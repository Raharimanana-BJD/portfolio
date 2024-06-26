import './assets/main.css'
// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'
// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import specific icons
import { faUser } from '@fortawesome/free-solid-svg-icons'
// add icons to the library
library.add(faUser)

createApp(app)
.component('font-awe')

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
