<template>
  <div>
    <TheMainHeader/>
    <section class="container">
      <TheBreadCrumb/>
      <GuiasLoading  class="main-content" v-if="isLoading" :error="error"/>
      <div class="row cards main-content" v-if="guias.length > 0">
        <router-link class="guia-card" v-for="(guia, index) in guias" :key="index" :to="'/guias/' + guia.slug">
          <GuiaCard :name="guia.title.rendered" :img-url="featured_images[index]"/>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import TheMainHeader from '@/components/TheMainHeader.vue'
import TheBreadCrumb from '@/components/TheBreadCrumb.vue'
import GuiaCard from '@/components/GuiaCard.vue'
import GuiasLoading from '@/components/GuiasLoading.vue'

export default { 
  name: 'guias',

  components: {
      TheMainHeader,
      TheBreadCrumb,
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
  computed: {
    featured_images: function () {
      const featured_media = this.guias.map( (guia) => {
        const featured_media = ("wp:featuredmedia" in guia["_embedded"]) ? guia["_embedded"]["wp:featuredmedia"] : null 
        return featured_media
      })
      const img_urls = []
      featured_media.forEach(element => {
        let exist_element = element ? element[0].source_url : null
        img_urls.push(exist_element)
      });
      return img_urls
    }
  },
  methods: {
    loadGuias: function() {
      this.isLoading = true
      this.error = ""

      this.$http.wp.get('guias?_embed').then( (response) => {
        this.guias = response.data
        this.isLoading = false
      }).catch((e) => {
        this.error = e.toString()
      })
    }
  },
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

.main-content {
  margin-top: 0.8rem;
}
</style>