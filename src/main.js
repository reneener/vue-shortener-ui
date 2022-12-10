import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import { md } from 'vuetify/lib/iconsets/md'

loadFonts(md)

createApp(App)
  .use(router)
  .mixin(mixins)
  .use(store)
  .use(vuetify)
  .mount('#app')
