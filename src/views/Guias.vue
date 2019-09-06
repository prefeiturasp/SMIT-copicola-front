<template>
    <div>
        <TheMainHeader/>
        <section class="container">
          <h1>Guias Page</h1>
          <GuiasLoading v-if="isLoading" :error="error"/>
          <div class="row cards" v-if="guias.length > 0">
            <router-link class="guia-card" v-for="guia in guias" :key="guia.id" :to="'/guias/' + guia.slug">
              <GuiaCard :name="guia.title.rendered"/>
            </router-link>
          </div>
        </section>
        
    </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue'
import GuiaCard from '@/components/GuiaCard.vue'
import GuiasLoading from '@/components/GuiasLoading.vue'

export default { 
  name: 'guias',
  components: {
      TheMainHeader,
      GuiasLoading,
      GuiaCard
  },
  data: function() {
    return {
      guias: [],
      isLoading: false,
      error: ""
    }
  },
  methods: {
    loadGuias: function() {
      this.isLoading = true
      this.error = ""

      this.$http.get('guias').then( (response) => {
        this.guias = response.data
        this.isLoading = false
      }).catch((e) => {
        this.error = e.toString()
      })
    }
  }
  ,
  mounted () {
    /* get guias from wp */
    this.loadGuias()    
  }   
}
</script>

<style scoped>
.guia-card {
  margin-right: 10px;
  margin-bottom: 10px;
}

.cards {
  flex-wrap: wrap;
}
</style>