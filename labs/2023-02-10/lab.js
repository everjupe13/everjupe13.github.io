const app = Vue.createApp({
  data() {
    return {
      message: "banana"
    }
  },
  mounted() {
    console.log('mounted')
  },
  methods: {
    testMethod() {
      return this.message + "!"
    }
  }
})

app.mount('#app')