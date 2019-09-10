<template>
  <div class="row card-container">
    <NovidadeCard class="card" tipo="outros" title="Laboratório de Inovação em Governo da Prefeitura de São Paulo" link="novidades/test"/>
    <NovidadeCard class="card" tipo="outros" title="Laboratório de Inovação em Governo da Prefeitura de São Paulo" link="novidades/test"/>
    <NovidadeCard class="card" tipo="outros" title="Laboratório de Inovação em Governo da Prefeitura de São Paulo" link="novidades/test"/>
    <NovidadeCard class="card" tipo="outros" title="Laboratório de Inovação em Governo da Prefeitura de São Paulo" link="novidades/test"/>
    <NovidadeCard class="card" tipo="outros" title="Laboratório de Inovação em Governo da Prefeitura de São Paulo" link="novidades/test"/>
  </div>
</template>

<script>
import NovidadeCard from '@/components/NovidadeCard.vue'

export default {
  components: {
    NovidadeCard
  }
}
</script>

<style scoped>
  .card {
    margin: 0 1rem;
  }
</style>