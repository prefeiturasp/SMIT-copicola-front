<template>
  <section class="container-fluid">
    <h1 class="add-fluid-padding guias-title">Conheça <br> <strong>Nossos Guias</strong></h1>
    <div class="guias-container">    
      <GuiaCard class="guia-card" v-for="i in 5" :key="i"/>
    </div>
  </section>
</template>

<script>
import GuiaCard from '@/components/GuiaCard.vue'

export default {
  name: 'GuiasFeaturedCards',
  components: {
    GuiaCard
  },
  props: {
    filter: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      guias: []
    }
  },
  computed: {
    featured_images: function () {
      return "teste"
    }
  },
  methods: {
    loadGuias: function () {
      
    }
  }
}
</script>

<style scoped>
  .guias-title {
    margin-bottom: 1.2rem;
    color: var(--orange);
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 500;
  }

  .guias-title strong {
    padding-left: 2.3rem;
  }

  .guias-container {
    display: flex;
    margin: 0 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .guia-card {
    margin: 0.8rem 0.8rem;
  }
</style>