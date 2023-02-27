import { RequestService } from './utils/RequestService.js'
import { ComponentsService } from './components.service.js'

const app = Vue.createApp({
  data() {
    return {
      
    }
  },
  mounted() {
  },
  methods: {
    
  }
})

const components = ComponentsService.getAll()
components.forEach(cmp => {
  app.component(cmp.name, cmp.component)
})

app.mount('#app')
