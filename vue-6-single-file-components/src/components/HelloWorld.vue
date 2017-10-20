<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Module1 />
    <Module2 />
  </div>
</template>

<script>
import Module1 from "./Module1"
import Module2 from "./Module2"

export default {
  name: 'HelloWorld',
  components: {
    Module1,
    Module2,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
