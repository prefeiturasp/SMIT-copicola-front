<template>
  <div>
    <TheMainHeader/>
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue' 

export default {
    name: 'Novidade',
    components: {
        TheMainHeader
    },
    created() {
      this.$store.commit('defineColorSet', 'novidades')
    }
}
</script>

<style>

</style>