<template>
  <div id="app">
    <router-view/>
    <TheMainFooter/>
  </div>
</template>

<script>
import TheMainFooter from '@/components/TheMainFooter.vue'

export default {
  name: "App",
  components: {
    TheMainFooter
  }
}
</script>

<style src="./assets/css/root-style.css">
</style>
