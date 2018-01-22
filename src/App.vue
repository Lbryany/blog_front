<template>
  <div id="app">
    {{ msg }}
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    index
  }
}
</script>

<style>

</style>
