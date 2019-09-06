<template>
  <div>
    <div v-if="error === ''">
      <vue-content-loading class="flexitem" :width="290" :height="290" v-for="i in 10" :key="i">
        <rect width="280" height="280"/> 
      </vue-content-loading>
    </div>
    <div class="error" v-else>
      <h2>Desculpe, um erro ocorreu ao carregar a página. Tente novamente.</h2>
      <em>{{ error }}</em>
      </div>
  </div>
</template>

<script>
import VueContentLoading from 'vue-content-loading'

export default {
  components: {
    VueContentLoading
  },
  props: {
    error: {
      Type: String,
      default: ""
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
}
.flexitem {
  flex-basis: 290px;
}

.error {
  width: 100%;
  text-align: center;
  flex-direction: column;
}

</style>
