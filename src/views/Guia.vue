<template>
  <div>
    <TheMainHeader/>
    <h1>{{ guia.titulo }}</h1>
    <h2>{{ $route.params }}</h2>
    <TheGuiaVideo>
      <source src="video.mp4">
    </TheGuiaVideo>
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue'

export default {
  name: 'Guia',
  components: {
    TheMainHeader
  },
  data: function () {
    return {
      guia: {
        titulo: 'Guia'
      }
    }
  }
}
</script>

<style>

</style>