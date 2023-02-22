import { Request } from './utils/request.js'


const app = Vue.createApp({
  data() {
    return {
      message: "banana"
    }
  },
  methods: {
    testMethod() {
      return this.message + "!"
    }
  }
})

app.mount('#app')
