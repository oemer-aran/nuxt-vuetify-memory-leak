import { createVuetify } from "vuetify"


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // comment next line to fix memory leak
    theme:{}
})

  nuxtApp.vueApp.use(vuetify)
})
