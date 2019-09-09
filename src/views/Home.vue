<template>
  <div>
    <TheMainHeader/>
    <h1>This is home like home fellow</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import TheMainHeader from '@/components/TheMainHeader.vue'

export default {
  name: 'home',
  components: {
    TheMainHeader,
  }
}
</script>
